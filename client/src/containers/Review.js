import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap'

class Review extends Component {
    render(){
        return (
            <div className="Review">
                <h2 className="ReviewAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        )
    }
}

export default Review;
