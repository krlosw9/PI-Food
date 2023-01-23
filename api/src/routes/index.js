const { Router } = require('express');
const router = Router();

// Importar todos los routers;
const recipeRoute = require('./recipes');
const dishTypeRoute = require('./dishTypes');
const dietRoute = require('./diets');

router.use('/recipes', recipeRoute);
router.use('/dishTypes', dishTypeRoute);
router.use('/diets', dietRoute);



module.exports = router;
