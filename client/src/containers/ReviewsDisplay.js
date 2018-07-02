import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap'
import ReviewsList from './ReviewsList';
import ReviewsForm from './ReviewsForm';

class ReviewDisplay extends Component {
    submit = (values) =>{
        console.log(values)
    }
    render(){
        return (
            <div>
              < ReviewsForm onSubmit={ this.submit }/>
              < ReviewsList />
            </div>
        )
    }
}

export default ReviewDisplay;
