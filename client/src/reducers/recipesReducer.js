import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function recipesReducer(state = initialState.recipes, action){
  switch(action.type){
    case types.FETCH_MEALS_SUCCESS:
      return action.payload
    case types.FETCH_APPETIZERS_SUCCESS:
      return action.payload.filter(recipe => recipe.meal_type == "Appetizer")
    case types.FETCH_SPECIALS_SUCCESS:
      return action.payload.filter(recipe => recipe.meal_type == "Special")
    case types.FETCH_BEVERAGES_SUCCESS:
      return action.payload.filter(recipe => recipe.meal_type == "Beverage")
    default:
      return state
  }
}
