const { DishType } = require('../db');

//Esta funcion es llamada desde la funcion getAll(), se usa para hacer un llenado inicial de la tabla dishType de BDD
const initialSave = async () =>{
  const initialState = [
    { name: "Morning meal"},
    { name: "Breakfast"},
    { name: "Brunch" },
    { name: "Lunch" },
    { name: "Main dish" },
    { name: "Side dish" },
    { name: "Snack" },
    { name: "Dinner" },
    { name: "Beverage or drink" }
  ];

  //El metodo bulkCreate() registra en BDD todo el contenido de un array, en este caso es initialState
  const data = await DishType.bulkCreate(initialState); 
  return data;
}

//Esta funcion retorna todos los dishType que tenga en base de datos, si la tabla esta vacia hace un llenado inicial
const getAll = async() =>{

  const dishTypes = await DishType.findAll();
  if (!dishTypes.length) {
    //Si esta vacio llena la DishType de BDD con un array inicial y lo retorna
    return await initialSave();
  }else{
    //Si tiene contenido lo retorna
    return dishTypes;
  }
}

module.exports = {
  getAll
}