import {GET_ALL} from '../actions/type'

const initialState = {
  allRecipes: []
}

export default function rootReducer(state = initialState, {type, payload}) {
  switch (type) {
    case GET_ALL:
      return {
        ...state, 
        allRecipes: payload
      }
  
    default: return state
  }
}