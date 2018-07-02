import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap'
import ReviewsList from './ReviewsList';

class ReviewDisplay extends Component {
    render(){
        return (
            <div>
              < ReviewsList />
            </div>
        )
    }
}

export default ReviewDisplay;
