import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function recipesReducer(state = initialState.recipes, action){
  switch(action.type){
    case types.FETCH_MEALS_SUCCESS:
      return action.payload
    default:
      return state
  }
}
