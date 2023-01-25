const controller = require('../controllers/recipe');

//Trae todas las recetas
const index = async (req, res) =>{
  const {title} = req.query;
  try {
    title === undefined
      ? res.json(await controller.getAll()) //Trae todas las recetas
      : res.json(await controller.searchRecipeByTitle(title)) //Trae solo las recetas que coincidan con la query title
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

//Trae el detalle de una receta
const show = async (req, res) =>{
  const {id} = req.params;
  try {
    isNaN(id) 
      ? res.json(await controller.getDetailsRecipesDB(id))
      : res.json(await controller.getDetailsRecipesApi(id))
    
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

//Guarda en base de datos una receta
const store = async (req, res) =>{
  
  try {
    const newRecipe = await controller.store(req.body);
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

module.exports = {
  index,
  show,
  store
}