class ReviewApi {
    static fetchReviews(){
      return fetch('api/reviews').then(response => {
        return response.json()
      }).then(reviewsPayload => {
        return reviewsPayload.reviews
      })
    }
  }
  
  export default ReviewApi;
  