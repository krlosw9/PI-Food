// Recibe el id del checkbox que se esta modificando y una copia del state(dishTypes o diets) del form
// Retorna el array con los id que deben estar seleccionados en el form
// checked es un array
const handlerCheckbox = (id, checked) =>{

  const findIdx = checked.indexOf(id);

  //Index -1 significa que no esta en el array, entonces toca pushearlo
  // Index > -1 -> si esto ocurre es porque indexOf encontro el id y retorna el index, con este index sacamos del array el id
  if (findIdx > -1) {
    checked.splice(findIdx, 1);
  } else {
    checked.push(id);
  }
  
  return checked;
}

export default handlerCheckbox;