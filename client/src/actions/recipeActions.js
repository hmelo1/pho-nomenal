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
