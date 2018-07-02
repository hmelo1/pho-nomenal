import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap'
import Review from './Review';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reviewActions from '../actions/reviewActions'

class ReviewsList extends Component {
    componentDidMount() {
        this.props.actions.fetchReviews()
      }
    
    render(){
        const { reviews } = this.props;
        return (
            <div>
              < Review reviews={reviews} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {reviews: state.reviews}
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(reviewActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);