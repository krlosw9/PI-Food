const {Router} = require('express');
const router = Router();
const {index} = require('../handlers/dishType');

router.get('/', index);

module.exports = router;