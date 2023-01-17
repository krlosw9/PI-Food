//Importar el middleware para validar el formulario de creacion recipe
const {recipeValidator} = require('../middleware/recipeValidator')
// Importar todos los routers;
const { Router } = require('express');

const handlerRecipe = require('../handlers/recipe');
const handlerDishType = require('../handlers/dishType');
const handlerDiet = require('../handlers/diets');

const router = Router();

//Grupo de rutas
router
  .route('/recipes')
  .get(handlerRecipe.index)
  .post(recipeValidator,handlerRecipe.store)

//Ruta individual
router.get('/dishTypes', handlerDishType.index);
router.get('/diets', handlerDiet.index);



module.exports = router;
