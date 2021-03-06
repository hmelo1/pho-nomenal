import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function reviewsReducer(state = initialState.reviews, action){
  switch(action.type){
    case types.FETCH_REVIEWS_SUCCESS:
      return action.payload.reverse()
    case types.ADD_REVIEWS:
      return action.payload.reverse()
    default:
      return state
  }
}
