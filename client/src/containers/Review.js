import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap'

class Review extends Component {
    render(){
        const { reviews } = this.props
        let reviewList = reviews.map((review, index) =>
        <Col sm={3} key={index}>
          <div className="modal-dialog" style={{"width" : "100%"}}>
            <div className="modal-header">
              {review.user}
            </div>
            <div className="modal-body">
              {review.review}<br />
            </div>
          </div>
        </Col>
        )
        return (
            <div className="Review">
                <Grid bsClass="">
                    {reviewList}
                </Grid>
            </div>
        )
    }
}

export default Review;