import * as types from './actionTypes';
import recipeApi from './recipeApi'

function fetchRecipeSuccess(payload) {
  return {type: types.FETCH_MEALS_SUCCESS, payload: payload}
}

export function fetchRecipes(){
  return function(dispatch){
    return recipeApi.fetchRecipes().then(recipesPayload => {
      dispatch(fetchRecipeSuccess(recipesPayload))
    })
  }
}

function fetchAppetizersSuccess(payload) {
  return {type: types.FETCH_APPETIZERS_SUCCESS, payload: payload}
}

export function fetchAppetizers(){
  return function(dispatch){
    return recipeApi.fetchRecipes().then(recipesPayload => {
      dispatch(fetchAppetizersSuccess(recipesPayload))
    })
  }
}


/*
export const FETCH_MEALS_SUCCESS =  'FETCH_MEALS_SUCCESS'
export const FETCH_APPETIZERS_SUCCESS =  'FETCH_APPETIZERS_SUCCESS'
export const FETCH_SPECIALS_SUCCESS =  'FETCH_SPECIALS_SUCCESS'
export const FETCH_BEVERAGES_SUCCESS =  'FETCH_BEVERAGES_SUCCESS'

*/
