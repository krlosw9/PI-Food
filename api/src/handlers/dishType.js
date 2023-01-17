const controller = require('../controllers/dishType');

const index = async (req, res) =>{
  try {
    res.json(await controller.getAll())
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  index
}