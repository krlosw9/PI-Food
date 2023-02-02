import {GET_ALL,CHANGE_PAGE,SEARCH_RECIPE,CHANGE_ERROR_STATUS, GET_DIETS,
        FILTER_BY_DIET,FILTER_BY_CREATOR,ORDER_BY_TITLE,ORDER_BY_HEALTHY,
        RECIPE_DETAIL, CLEAR_DETAIL_RECIPE, GET_DISH_TYPES} from '../actions/type'

import {mainFiltersAndSorting} from './utils';

const initialState = {
  allRecipes: [],
  allRecipesCopy: [],
  currentPage: 1,
  errorStatus: '',
  allDiets: [],
  recipeDetail: {},
  allDishTypes: [],
  filtersAndSorting: {
    filterByDiet: '',
    filterByCreator: '',
    orderByTitle: '',
    orderByHealthy: '',
  }
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
      
      return {
        ...state,
        filtersAndSorting: {...state.filtersAndSorting, filterByDiet:payload},
        allRecipes: mainFiltersAndSorting({...state.filtersAndSorting, filterByDiet:payload} ,[...state.allRecipesCopy])
      }
    
    case FILTER_BY_CREATOR:
      
      return {
        ...state,
        filtersAndSorting: {...state.filtersAndSorting, filterByCreator:payload},
        allRecipes: mainFiltersAndSorting({...state.filtersAndSorting, filterByCreator:payload} ,[...state.allRecipesCopy])
      }

    case ORDER_BY_TITLE:
      return {
        ...state,
        filtersAndSorting: {...state.filtersAndSorting, orderByTitle:payload},
        allRecipes: mainFiltersAndSorting({...state.filtersAndSorting, orderByTitle:payload} ,[...state.allRecipesCopy])
      }
    
    case ORDER_BY_HEALTHY:
      return {
        ...state,
        filtersAndSorting: {...state.filtersAndSorting, orderByHealthy:payload},
        allRecipes: mainFiltersAndSorting({...state.filtersAndSorting, orderByHealthy:payload} ,[...state.allRecipesCopy])
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
    
    case GET_DISH_TYPES:
      return {
        ...state,
        allDishTypes: payload
      }
  
    default: return state
  }
}