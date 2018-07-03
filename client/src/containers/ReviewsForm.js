import React from 'react';
import ReviewsList from './ReviewsList';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reviewActions from '../actions/reviewActions'

/*

const afterSubmit = (reseult, dispatch) =>
dispatch(reset('userReview'));

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
                            name="user"
                            component="input"
                            type="text"
                            placeholder="Name"
                        />
                        </div>
                    </div>
                    <div>
                        <label>Review</label>
                        <div>
                        <Field name="review" component="textarea" />
                        </div>
                    </div>
                    <div>
                        <button type="submit">
                        Submit
                        </button>
                        <button type="button" onClick={this.props.reset}>
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

let myForm = reduxForm({ form: 'userReview'})(ReviewsForm) 

export default connect(mapStateToProps, mapDispatchToProps)(myForm)