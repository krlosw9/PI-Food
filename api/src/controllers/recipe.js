const { Recipe, Instruction, Ingredient, Diet, DishType } = require('../db');
const { Op } = require("sequelize");
const axios = require('axios');

require('dotenv').config();
const { API_KEY } = process.env;

const LIMIT = 100;

//Borrar produccion
const recipesApiTemporarily = require('./recipesApiTemporarily');
const recipeTem = require('./recipeApiTemp');

//Esta funcion es llamada desde la funcion index del handler recipe, esta funcion trae todas las recipe de base de datos y de la api
const getAll = async () =>{
  //Esta url trae 100 recipe de la api
  const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=${LIMIT}`;

  //Traemos recetas de la api
  // const recipesRawApi = (await axios.get(URL)).data;
  const dataApi = recipesApiTemporarily;
  //Le damos formato a la respuesta traida de la api
  // const dataApi = cleanArrayApi(recipesRawApi);

  //Traemos recetas de la base de datos
  const recipesRawDb = await Recipe.findAll({
    include: Diet, attributes: ['id','title', "healthScore", "time", "image","created"]
  })
  //Le damos formato a la respuesta de la base de datos
  const dataDB = cleanArrayDB(recipesRawDb);

  return [...dataDB, ...dataApi];
}

const searchRecipeByTitle = async (title) =>{
  const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${title}&addRecipeInformation=true&number=${LIMIT}`;
  
  //Traemos recetas de la api
  const recipesRawApi = (await axios.get(URL)).data;
  //Le damos formato a la respuesta traida de la api
  const dataApi = cleanArrayApi(recipesRawApi);

  //Traemos recetas de la base de datos
  const recipesRawDb = await Recipe.findAll({
    where: {
      title: {
        [Op.like]: `%${title}%`
      }
    },
    include: Diet, 
    attributes: ['id','title', "healthScore", "time", "image","created"]
  })
  //Le damos formato a la respuesta de la base de datos
  const dataDB = cleanArrayDB(recipesRawDb);

  const dataJoin = [...dataDB, ...dataApi];
  
  //Evaluamos si el title que llega por parametro conincide en algun title de alguna recipe, en BD o en la api externa
  if (dataJoin.length === 0) {
    throw new Error('title not found.');
  }else{
    return dataJoin;
  }
}

//Se debe unifica las respuestas de base de datos y api, en esta funcion se le da formato a la respuesta de la api
const cleanArrayApi = (recipesRaw) =>{
  return recipesRaw.results.map(recipe => {
    return {
      id:           recipe.id,
      title:        recipe.title,
      healthScore:  recipe.healthScore,
      time:         recipe.readyInMinutes,
      image:        recipe.image,
      diets:        recipe.diets,
      created:      false
    }  
  } )
}

//Le damos el mismo formato que maneja la api a la informacion que se recupera de base de datos
const cleanArrayDB = (recipesRaw) =>{
  return recipesRaw.map(recipe => {
    return {
      id:           recipe.id,
      title:        recipe.title,
      healthScore:  recipe.healthScore,
      time:         recipe.time,
      image:        recipe.image,
      diets:        recipe.diets.map(diet => diet.name),
      created:      recipe.created
    }
  })
}

//Retorna una receta de la api con su informacion detallada
const getDetailsRecipesApi = (idRecipe) =>{
  // const URL = `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`;

  // const recipe = axios.get(URL)
  //   .then(r => {
  //     return {
  //       title:        r.data.title,
  //       summary:      r.data.summary,
  //       healthScore:  r.data.healthScore,
  //       time:         r.data.readyInMinutes,
  //       image:        r.data.image,
  //       instructions: r.data.analyzedInstructions[0]?.steps.map(inst => inst.step),
  //       ingredients:  r.data.extendedIngredients.map(ing => ing.original),
  //       dishTypes:    r.data.dishTypes,
  //       diets:        r.data.diets,
  //     }
  //   })

  // return recipe;
  return recipeTem;
}

//Consulta en base de datos una receta
const getDetailsRecipesDB = async (idRecipe) => {
  const recipeRaw = await Recipe.findByPk(idRecipe ,{
    include: [
      {model: Instruction, attributes: ['name']}, 
      {model: Ingredient, attributes: ['name']}, 
      {model: Diet, attributes: ['name']}, 
      {model: DishType, attributes: ['name']}
    ],
    attributes: { 
      exclude: ['createdAt', 'updatedAt'] 
    }
  } )
  
  return cleanArrayDetailDB(recipeRaw);
}

//Le damos el mismo formato que maneja la api a la informacion que se recupera de base de datos
const cleanArrayDetailDB = (recipeRaw) =>{
  return {
    id:           recipeRaw.id,
    title:        recipeRaw.title,
    summary:      recipeRaw.summary,
    healthScore:  recipeRaw.healthScore,
    time:         recipeRaw.time,
    image:        recipeRaw.image,
    instructions: recipeRaw.instructions.map(ins => ins.name),
    ingredients:  recipeRaw.ingredients.map(ing => ing.name),
    dishTypes:    recipeRaw.dishTypes.map(dt => dt.name),
    diets:        recipeRaw.diets.map(diet => diet.name),
  }
}

//Guarda una receta nueva y la retorna, descripción de parametros
//instructions = [{name: "nuevaInstruccion"}] -> array de objetos -> en BDD nueva Instruction
//ingredients = [{name: "NuevoIngrediente"}] -> array de objetos -> en BDD nuevo Ingredient
//diets = [1,2,3] -> array con idDiets
//dishTypes = [3,2,1] -> array con idDishTypes
const store = async({title, summary, image, healthScore, time, instructions=[], ingredients=[], diets=[], dishTypes=[]}) =>{
  const newRecipe = await Recipe.create({
    title, 
    summary, 
    image, 
    healthScore, 
    time,
    instructions: instructions,
    ingredients: ingredients
  }, {
    include: [ Instruction, Ingredient ]
  });

  await newRecipe.setDiets(diets);
  await newRecipe.setDishTypes(dishTypes);
  
  return getDetailsRecipesDB(newRecipe.id)
}

module.exports = {
  getAll,
  searchRecipeByTitle,
  getDetailsRecipesDB,
  getDetailsRecipesApi,
  store
}