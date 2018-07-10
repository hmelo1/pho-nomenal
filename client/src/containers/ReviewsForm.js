import React from 'react';
import ReviewsList from './ReviewsList';
import {Field, reduxForm, reset} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reviewActions from '../actions/reviewActions'

class ReviewsForm extends React.Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this)
    }

    componentWillMount() {
        this.props.actions.fetchReviews()
    }

    submit = ({ user='', review='' }) => {
        this.props.actions.addReviews({user, review});
    }

    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.submit)}>
                    <div>
                        <label>Name</label>
                        <div>
                        <Field
                            className="form-control col-lg-12"
                            name="user"
                            component="input"
                            type="text"
                            placeholder="Your Name"
                        />
                        </div>
                    </div>
                    <div>
                        <label>Review</label>
                        <div>
                        <Field 
                            className="form-control col-lg-12" 
                            name="review" 
                            component="textarea" 
                            placeholder="What are your thoughts?"
                            rows="10"
                        />
                        <br />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary btn-lg col-md-6">
                        Submit
                        </button>
                        <button type="button" onClick={this.props.reset} className="btn btn-danger btn-lg col-md-6">
                        Clear Values
                        </button>
                    </div>
                </form>
                < ReviewsList reviews={this.props.reviews}/>
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return {reviews: state.reviews}
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(reviewActions, dispatch)}
}

const afterSubmit = (reseult, dispatch) =>
dispatch(reset('userReview'));


let myForm = reduxForm({ 
                form: 'userReview',
                onSubmitSuccess: afterSubmit
            })(ReviewsForm) 

export default connect(mapStateToProps, mapDispatchToProps)(myForm)