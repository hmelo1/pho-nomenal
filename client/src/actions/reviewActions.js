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


export function addReviews(data){
  return function(dispatch){
    return reviewApi.addReviews(data).then(reviewsPayload => {
      dispatch(addReviewSuccess(reviewsPayload))
    })
  }
}

function addReviewSuccess(payload){
  return {type: types.ADD_REVIEWS, payload: payload}
}