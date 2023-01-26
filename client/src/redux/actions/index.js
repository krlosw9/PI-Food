import { GET_ALL,CHANGE_PAGE } from "./type";
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