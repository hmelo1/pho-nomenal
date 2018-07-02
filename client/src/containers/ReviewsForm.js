import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';

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

const submit = ({ user='', review='' }) =>{
    submitToServer({user, review});
}

const ReviewsForm = (props) => {
    const { handleSubmit, reset} = props
  return (
    <form onSubmit={handleSubmit(submit)}>
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
        <button type="button" onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

const afterSubmit = (reseult, dispatch) =>
dispatch(reset('userReview'));


export default reduxForm({
  form: 'userReview', // a unique identifier for this form
  onSubmitSuccess: afterSubmit,
})(ReviewsForm)
