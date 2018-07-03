import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reviewActions from '../actions/reviewActions'

class ReviewsList extends Component {
    constructor(){
        super();
        this.state={
            reviews: []
        }
    }
    componentDidMount() {
        this.props.actions.fetchReviews()
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.reviews !== this.props.reviews){
            console.log("Hello?")
            return { reviews: nextProps.reviews}
        }
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