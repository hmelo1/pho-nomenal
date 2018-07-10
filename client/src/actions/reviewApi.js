class ReviewApi {
    static fetchReviews(){
      return fetch('api/reviews').then(response => {
        return response.json()
      }).then(reviewsPayload => {
        return reviewsPayload.reviews
      })
    }

    static addReviews(data){
      return fetch('api/reviews', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => {
        return response.json()
      }).then(reviewsPayload =>{
        return reviewsPayload.reviews
      })
    }
  }

 export default ReviewApi;
  