const mainFiltersAndSorting = (filtersAndSorting, allRecipes) =>{
  // console.log("filtersAndSorting: ",filtersAndSorting);
  if (filtersAndSorting.filterByDiet !== '') {
    allRecipes = filterByDiet(allRecipes, filtersAndSorting.filterByDiet)
  }

  if (filtersAndSorting.filterByCreator !== '') {
    allRecipes = filterByCreator(allRecipes, filtersAndSorting.filterByCreator)
  }

  if (filtersAndSorting.orderByTitle !== '') {
    allRecipes = orderByTitle(allRecipes, filtersAndSorting.orderByTitle)
  }

  if (filtersAndSorting.orderByHealthy !== '') {
    allRecipes = orderByHealthy(allRecipes, filtersAndSorting.orderByHealthy)
  }

  return allRecipes;
}


const filterByDiet = (allRecipes, payload) =>{
  let filterOne = [];
  const dietName = payload.toLowerCase();

  payload === 'none' 
    ? filterOne = allRecipes
    : filterOne = allRecipes.filter(recipe => recipe.diets.some(diet => diet.toLowerCase() === dietName))
  return filterOne;
}

const filterByCreator = (allRecipes, payload) =>{
  let filterTwo = [];

  payload === 'none' 
    ? filterTwo = allRecipes
    : filterTwo = allRecipes.filter(recipe => recipe.created.toString() === payload)

  return filterTwo;
}

const orderByTitle = (allRecipes, payload) =>{
  return orderFunction([...allRecipes] ,payload, 'title')
}

const orderByHealthy = (allRecipes, payload) =>{
  return orderFunction([...allRecipes] ,payload, 'healthScore')
}

const orderFunction = (recipes, orientation, property) => {
  //El parametro recipes es una copia de state.allRecipesCopy
  //El metodo sort() cambia el contenido del array que lo esta llamando
  //Al cambiar el contenido del array original, redux no retorna copia del state, por lo tanto no hay re-render en los componentes que estan suscritos a la propiedad allRecipes
  let order = [];

  if (orientation === 'none'){ 
    order = recipes 
  }else if(orientation === 'up'){
    order = recipes.sort((firstEl, secondEl) =>{
      if (firstEl[property] > secondEl[property]) return 1
      if (firstEl[property] < secondEl[property]) return -1
      return 0;//Si ninguna de los dos if anteriores se cumple retorna aqui
    } )
  }else if(orientation === 'down'){
    order = recipes.sort((firstEl, secondEl) =>{
      if (firstEl[property] > secondEl[property]) return -1
      if (firstEl[property] < secondEl[property]) return 1
      return 0;//Si ninguna de los dos if anteriores se cumple retorna aqui
    } )
  }

  return order;
}

export {
  mainFiltersAndSorting
}