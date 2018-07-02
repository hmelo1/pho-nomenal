import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap'
import Review from './Review';

class ReviewsList extends Component {
    render(){
        return (
            <div>
              < Review author="Eddie"> Awesome! </ Review>
            </div>
        )
    }
}

export default ReviewsList;
