import { GET_ALL,CHANGE_PAGE,SEARCH_RECIPE,CHANGE_ERROR_STATUS } from "./type";
const URL_BACKEND = 'http://192.168.10.87:3001';

//Traer todas las recetas
export const getAll = () =>{
  return (dispatch) => {
    fetch(`${URL_BACKEND}/recipes`)
      .then(res => res.json())
      .then(data => dispatch({type: GET_ALL, payload: data}))
  }
}

export const changePage = (page) =>{
  return {type: CHANGE_PAGE, payload: page}
}

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