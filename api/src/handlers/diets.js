const controller = require('../controllers/diets');

const index = async(req, res) =>{
  try {
    res.json(await controller.getAll())
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  index
}