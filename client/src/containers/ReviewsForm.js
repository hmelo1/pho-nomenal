import React from 'react';
import ReviewsList from './ReviewsList';
import {Field, reduxForm, reset} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reviewActions from '../actions/reviewActions'

/*


*/

async function submitToServer(data){
    try{
        let response = await fetch('api/reviews', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        let responseJson = await response.json();
        return responseJson.reviews
    } catch(error){
        console.error(error);
    }
}


class ReviewsForm extends React.Component{
    constructor(){
        super();
        this.submit = this.submit.bind(this)

        this.state={
            reviews: []
        }
    }

    componentWillMount() {
        this.props.actions.fetchReviews()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.reviews !== this.props.reviews){
            this.setState({
                reviews: nextProps.reviews
            })
        }
    }

    submit = ({ user='', review='' }) =>{
        submitToServer({user, review}) 
            .then((data) => {
                this.setState({
                    reviews: data.reverse()
                })
            })
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
                            placeholder="Your Review"
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
                < ReviewsList reviews={this.state.reviews}/>
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