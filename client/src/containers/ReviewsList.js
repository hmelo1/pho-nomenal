import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap'
/*
class RecipeList extends Component {
  render(){
    const { recipes } = this.props
    let recipesList = recipes.map((recipe, index) =>
      <Col sm={3} key={index}>
        <div className="modal-dialog" style={{"width" : "100%"}}>
          <div className="modal-header">
            {recipe.title}
          </div>
          <div className="modal-body">
            {recipe.description}<br />
          </div>
          <div className="modal-body">
            {recipe.main_ingredient}<br />
            {recipe.meal_type}
          </div>
        </div>
      </Col>
    )
    return (
      //need to add this to remove the wiite space from the grid container.
      <Grid bsClass="">
        {recipesList}
      </Grid>
    )
  }
}*/

class ReviewList extends Component {
    render(){
        return (
            <div>
                Individual Review!
            </div>
        )
    }
}

export default ReviewList;
