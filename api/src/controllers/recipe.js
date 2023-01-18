const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Recipe, Instruction, Ingredient, Diet, DishType } = require('../db');

//Esta url trae 100 recipe de la api
const URL_GET_ALL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=2`;

//Esta funcion es llamada desde la funcion index del handler recipe, esta funcion trae todas las recipe de base de datos y de la api
const getAll = async () =>{
  //getAllRecipesApi() trae una promesa pending
  const dataApi = await getAllRecipesApi();
  //getAllRecipesDB() trae una promesa pending
  const dataDB = await getAllRecipesDB();

  const recipes = dataDB.concat(dataApi);

  return recipes;
}

const getAllRecipesApi = () => {
  const data = axios.get(URL_GET_ALL)
    .then(res => res.data.results.map(recipe => {

      return {
        id: recipe.id,
        title: recipe.title,
        healthScore: recipe.healthScore,
        time: recipe.readyInMinutes,
        image: recipe.image,
        diets: recipe.diets
      }  
    } ));
  
  return data;//Retorna una promesa en estado pending
}

//Retorna todas las recetas guardadas en base de datos, seleccionando los atributos necesarios
const getAllRecipesDB = () =>{
  const recipes = Recipe.findAll({
      include: Diet, attributes: ['id','title', "healthScore", "time", "image"]
  })
  //Le damos el mismo formato que maneja la api a la informacion que se recupera de base de datos
  .then(arrayRecipes => {
    return arrayRecipes.map(recipe => {
        return {
          id:           recipe.id,
          title:        recipe.title,
          healthScore:  recipe.healthScore,
          time:         recipe.time,
          image:        recipe.image,
          diets:        recipe.diets.map(diet => diet.name)
        }
      }
    )
  })

  return recipes
}

//Retorna una receta de la api con su informacion detallada
const getDetailsRecipesApi = (idRecipe) =>{
  const URL = `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`;

  const recipe = axios.get(URL)
    .then(r => {
      return {
        title:        r.data.title,
        summary:      r.data.summary,
        healthScore:  r.data.healthScore,
        time:         r.data.readyInMinutes,
        image:        r.data.image,
        instructions: r.data.analyzedInstructions[0]?.steps.map(inst => inst.step),
        ingredients:  r.data.extendedIngredients.map(ing => ing.original),
        dishTypes:    r.data.dishTypes,
        diets:        r.data.diets,
      }
    })

  return recipe;
}

//Retorna una receta de la base de datos con su informacion detallada
const getDetailsRecipesDB = (idRecipe) => {
  const recipe = Recipe.findByPk(idRecipe ,{
    include: [
      {model: Instruction}, 
      {model: Ingredient}, 
      {model: Diet}, 
      {model: DishType}
    ],
    attributes: { 
      exclude: ['createdAt', 'updatedAt'] 
    }
  } )
  //Le damos el mismo formato que maneja la api a la informacion que se recupera de base de datos
  .then(r => {
    return {
      title:        r.title,
      summary:      r.summary,
      healthScore:  r.healthScore,
      time:         r.time,
      image:        r.image,
      instructions: r.instructions.map(ins => ins.name),
      ingredients:  r.ingredients.map(ing => ing.name),
      dishTypes:    r.dishTypes.map(dt => dt.name),
      diets:        r.diets.map(diet => diet.name),
    }
  })

  return recipe;
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

  newRecipe.setDiets(diets);
  newRecipe.setDishTypes(dishTypes);
  
  return newRecipe
}

module.exports = {
  getAll,
  store
}