import { GET_ALL,CHANGE_PAGE,SEARCH_RECIPE,CHANGE_ERROR_STATUS,GET_DIETS,
          FILTER_BY_DIET,FILTER_BY_CREATOR,ORDER_BY_TITLE,ORDER_BY_HEALTHY,
          RECIPE_DETAIL,CLEAR_DETAIL_RECIPE,GET_DISH_TYPES, URL_BACKEND } from "./type";


//Traer todas las recetas
export const getAll = () =>{
  return (dispatch) => {
    fetch(`${URL_BACKEND}/recipes`)
      .then(res => res.json())
      .then(data => dispatch({type: GET_ALL, payload: data}))
  }
}

//Cambia el paginado de Home
export const changePage = (page) =>{
  return {type: CHANGE_PAGE, payload: page}
}

//Busca las recetas que coincidan con la busqueda ingresada por el usuario en Home
export const seacrhRecipe = (txtSearch) =>{
  return (dispatch) => {
    fetch(`${URL_BACKEND}/recipes?title=${txtSearch}`)
      .then(res => res.json())
      .then(data => {
        data.hasOwnProperty('error') 
          ? dispatch({type:CHANGE_ERROR_STATUS, payload: data.error})
          : dispatch({type:SEARCH_RECIPE, payload: data})
      })
  }
}

//Se le envia la propiedad errorStatus del state un '' para eliminar los mensajes de error que tenga
export const clearErrorStatus = () =>{
  return {type:CHANGE_ERROR_STATUS, payload: ''}
}

//Trae todas las dietas
export const getDiets = () =>{
  return (dispatch) => {
    fetch(`${URL_BACKEND}/diets`)
      .then(res => res.json())
      .then(data => dispatch({type: GET_DIETS, payload: data}))
  }
}

//Filtra las recetas por dieta
export const filterByDiet = (diet) => ({type: FILTER_BY_DIET, payload:diet})

//Filtra las recetas creadas por el usuario o pre-existentes
export const filterByCreator = (creator) => ({type: FILTER_BY_CREATOR, payload:creator})

//Ordena las recetas por titulo ascendente o descendente
export const orderByTitle = (orientation) => ({type: ORDER_BY_TITLE, payload:orientation})

//Ordena las recetas por healt score ascendente o descendente
export const orderByHealthy = (orientation) => ({type: ORDER_BY_HEALTHY, payload:orientation})

/* ************************************* DETAIL ************************************* */
export const recipeDetail = (recipeId) =>{
  return (dispatch) => {
    fetch(`${URL_BACKEND}/recipes/${recipeId}`)
      .then(res => res.json())
      .then(data => dispatch({type:RECIPE_DETAIL, payload:data}))
  }
}

export const clearDetailRecipe = () =>{
  return {type: CLEAR_DETAIL_RECIPE}
}

/* ************************************* FORM CREATE ************************************* */

export const getDishTypes = () =>{
  return (dispatch) => {
    fetch(`${URL_BACKEND}/dishTypes`)
      .then(res => res.json())
      .then(data => dispatch({type: GET_DISH_TYPES, payload:data}))
  }
}