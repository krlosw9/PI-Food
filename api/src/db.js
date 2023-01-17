require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Recipe, Diet, DishType, Instruction, Ingredient } = sequelize.models;

// Aca vendrian las relaciones

//Relacion uno a muchos -> Una receta tiene muchas instrucciones (paso a paso)
//Y la instruccion (paso) pertenece a una receta
Recipe.hasMany(Instruction);//Una recipe(receta) tiene muchos Instruction(pasos o instrucciones)
Instruction.belongsTo(Recipe);//una Instruction pertenece a una recipe

//Relacion uno a muchos -> Una receta tiene muchos Ingredientes
//(en esta app) - Un ingrediente pertenece a una receta
Recipe.hasMany(Ingredient); 
Ingredient.belongsTo(Recipe);

//Relacion muchos a muchos -> una receta tiene muchas dietas (keto, vegano....)
//Una dieta puede estar en muchas recetas (la dieta keto puede tener muchas recetas)
Recipe.belongsToMany(Diet, { through: 'recipeDiets' });
Diet.belongsToMany(Recipe, { through: 'recipeDiets' });

//Relacion muchos a muchos -> una recipe(receta) tiene muchos DishType(Tipos de plato)
//Un DishType (tipo de plato - (almuerzo o desayuno)) tiene muchas recipe(recetas)
//Ejemplo: un sandwich puede ser para un desayuno o cena y en una cena puede estar un sandwich o Hamburguesa
Recipe.belongsToMany(DishType, { through: 'recipeDishTypes' });
DishType.belongsToMany(Recipe, { through: 'recipeDishTypes' });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
