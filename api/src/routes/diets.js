const {Router} = require('express');
const router = Router();
const {index} = require('../handlers/diets');

router.get('/', index);

module.exports = router;