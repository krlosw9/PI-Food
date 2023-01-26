import { GET_ALL } from "./type";
const URL_BACKEND = 'http://localhost:3001';

//Traer todas las recetas
export const getAll = () =>{
  return (dispatch) => {
    fetch(`${URL_BACKEND}/recipes`)
      .then(res => res.json())
      .then(data => dispatch({type: GET_ALL, payload: data}))
  }
}