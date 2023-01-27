//Esta funcion valida el request post que llega desde el formulario de registro de recipe
const recipeValidator = (req, res, next) =>{
  const {title, summary, image, healthScore, time} = req.body;

  if (!title) return res.json({error: "Title not found"});
  if (!summary) return res.json({error: "Summary not found"});

  
  const regularExpression = new RegExp('^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$');
  if (image !== '' && (!regularExpression.test(image))) return res.json({error: "Image url invalid"});
  
  //Si el usuario no definio url de image, se asigna una url image predeterminada
  if (!image) req.body.image = "https://spoonacular.com/recipeImages/667701-312x231.jpg";
  
  //Admite healthScore vacio o numerico
  if (isNaN(healthScore)) return res.json({error: "healthScore not is number"});

  if (healthScore === '') req.body.healthScore = 0;

  //Admite time vacio o numerico
  if (isNaN(time)) return res.json({error: "time not is number"});

  if(time === '') req.body.time = 0;

  //La request paso la validacion, continua al handler
  next()
}

module.exports = {
  recipeValidator
}