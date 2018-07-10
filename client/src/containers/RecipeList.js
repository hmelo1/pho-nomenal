import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap'

class RecipeList extends Component {
  render(){
    const { recipes } = this.props
    let recipeList = recipes.map((recipe, index) =>
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
            {recipe.meal_type} <br />
            
          </div>
        </div>
      </Col>
    )
    return (
      //need to add this to remove the wiite space from the grid container.
      <Grid bsClass="">
        {recipeList}
      </Grid>
    )
  }
}

export default RecipeList;
