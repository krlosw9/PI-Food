import {GET_ALL,CHANGE_PAGE} from '../actions/type'

const initialState = {
  allRecipes: [],
  currentPage: 1
}

export default function rootReducer(state = initialState, {type, payload}) {
  switch (type) {
    case GET_ALL:
      return {
        ...state, 
        allRecipes: payload
      }
    case CHANGE_PAGE: 
      return {
        ...state,
        currentPage: payload
      }
  
    default: return state
  }
}