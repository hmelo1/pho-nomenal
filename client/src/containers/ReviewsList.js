import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reviewActions from '../actions/reviewActions'


class ReviewsList extends Component {
    
/*
    componentWillUpdate(nextProps, nextState){
        console.log("Component will update")
        console.log(nextProps)
        console.log(nextState)
    }*/

    render(){
        let { reviews } = this.props;
        return (
            <div>
              < Review reviews={reviews} />
            </div>
        )
    }
}
/*
function mapStateToProps(state, ownProps){
    return {reviews: state.reviews}
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(reviewActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);*/
export default(ReviewsList)