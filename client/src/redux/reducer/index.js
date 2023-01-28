import {GET_ALL,CHANGE_PAGE,SEARCH_RECIPE,CHANGE_ERROR_STATUS, GET_DIETS,
        FILTER_BY_DIET,FILTER_BY_CREATOR,ORDER_BY_TITLE,ORDER_BY_HEALTHY,
        RECIPE_DETAIL, CLEAR_DETAIL_RECIPE} from '../actions/type'

const initialState = {
  allRecipes: [],
  allRecipesCopy: [],
  currentPage: 1,
  errorStatus: '',
  allDiets: [],
  recipeDetail: {}
}

export default function rootReducer(state = initialState, {type, payload}) {
  switch (type) {
    case GET_ALL:
      return {
        ...state, 
        allRecipes: payload,
        allRecipesCopy: payload
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
    
    case GET_DIETS:
      return {
        ...state,
        allDiets: payload
      }

    case FILTER_BY_DIET:
      let filterOne = [];
      const dietName = payload.toLowerCase();

      payload === 'none' 
        ? filterOne = state.allRecipesCopy
        : filterOne = state.allRecipesCopy.filter(recipe => recipe.diets.some(diet => diet === dietName))

      return {
        ...state,
        allRecipes: filterOne
      }
    
    case FILTER_BY_CREATOR:
      let filterTwo = [];
      payload === 'none' 
        ? filterTwo = state.allRecipesCopy
        : filterTwo = state.allRecipesCopy.filter(recipe => recipe.created.toString() === payload) 

      return {
        ...state,
        allRecipes: filterTwo
      }

    case ORDER_BY_TITLE:
      return {
        ...state,
        allRecipes: orderFunction([...state.allRecipesCopy] ,payload, 'title')
      }
    
    case ORDER_BY_HEALTHY:
      return {
        ...state,
        allRecipes: orderFunction([...state.allRecipesCopy] ,payload, 'healthScore')
      }

    case RECIPE_DETAIL:
      return {
        ...state,
        recipeDetail: payload
      }
    case CLEAR_DETAIL_RECIPE:
      return {
        ...state,
        recipeDetail: {}
      }
  
    default: return state
  }
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