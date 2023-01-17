const controller = require('../controllers/recipe');

const index = async (req, res) =>{
  try {
    res.json(await controller.getAll());
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

const store = async (req, res) =>{
  
  try {
    const newRecipe = await controller.store(req.body);
    res.json(newRecipe);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

module.exports = {
  index,
  store
}