import React, { Component } from 'react';
import { Navbar, Grid, Row, Col, Modal } from 'react-bootstrap'

class RecipeList extends Component {
  render(){
    const { recipes } = this.props
    let recipesList = recipes.map((recipe, index) =>
      <Col sm={3}>
      <div className="modal-dialog" style={{"width" : "100%"}}>
        <div className="modal-header">
          {recipe.title}
        </div>
        <div className="modal-body">
          {recipe.description}
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
}

export default RecipeList;
