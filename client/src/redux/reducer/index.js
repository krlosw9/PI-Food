import {GET_ALL,CHANGE_PAGE,SEARCH_RECIPE,CHANGE_ERROR_STATUS} from '../actions/type'

const initialState = {
  allRecipes: [],
  currentPage: 1,
  errorStatus: ''
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
    
    case SEARCH_RECIPE:
      return {
        ...state,
        allRecipes: payload
      }
    
    case CHANGE_ERROR_STATUS:
      return {
        ...state,
        errorStatus: payload
      }
  
    default: return state
  }
}