//Importar el middleware para validar el formulario de creacion recipe
const {recipeValidator} = require('../middleware/recipeValidator')
const {index, store, show} = require('../handlers/recipe');
const {Router} = require('express');
const router = Router();


//Grupo de rutas
router
  .route('/')
  .get(index)
  .post(recipeValidator,store)

router.get('/:id', show)

module.exports = router;