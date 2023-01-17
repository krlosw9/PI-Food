const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Recipe, Instruction, Ingredient } = require('../db');

//Esta url trae 100 recipe de la api
const URL_GET_ALL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=2`;
//const URL_BASE = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;


//Esta funcion es llamada desde la funcion index del handler recipe, esta funcion trae todas las recipe de base de datos y de la api
const getAll = async () =>{
  //getRecipesApi() trae una promesa pending
  //const dataApi = await getRecipesApi();

  return {property: "Esta comentado el llamado a la api"};
}

const getRecipesApi = () => {
  const data = axios.get(URL_GET_ALL)
    .then(res => res.data.results.map(recipe => {

      return {
        id: recipe.id,
        title: recipe.title,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        time: recipe.readyInMinutes,
        image: recipe.image,
        dishTypes: recipe.dishTypes,
        diets: recipe.diets,
        instructions: recipe.analyzedInstructions[0]?.steps.map(inst => inst.step)
      }  
    } ));
  
  return data;//Retorna una promesa en estado pending
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