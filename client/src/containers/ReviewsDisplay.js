import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap'
import ReviewsList from './ReviewsList';
import ReviewsForm from './ReviewsForm';

class ReviewDisplay extends Component {
    render(){
        return (
            <div className="Where am I">
              < ReviewsForm />
              < ReviewsList />
            </div>
        )
    }
}

export default ReviewDisplay;
