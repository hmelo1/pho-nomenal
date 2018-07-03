import * as types from './actionTypes';
import reviewApi from './reviewApi'

function fetchReviewSuccess(payload) {
    return {type: types.FETCH_REVIEWS_SUCCESS, payload: payload}
  }
  
export function fetchReviews(){
  return function(dispatch){
    return reviewApi.fetchReviews().then(reviewsPayload => {
      dispatch(fetchReviewSuccess(reviewsPayload))
    })
  }
}

export const addReview = review => {
  return { type: 'ADD_REVIEW', review}
}