import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions'

class LikeButton extends Component {
  handleClick = () => {
    //console.log(this.props)
    this.props.actions.addLike(this.props.recipe.id)
  } 
  render(){
    const { recipe } = this.props
    return (
      //need to add this to remove the wiite space from the grid container.
      <Grid bsClass="">
        <button onClick={this.handleClick}> {recipe.likes}</ button>
      </Grid>
    )
  }
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(recipeActions, dispatch)}
}

export default connect(null, mapDispatchToProps)(LikeButton)