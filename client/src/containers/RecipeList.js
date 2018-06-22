import React, { Component } from 'react';

class RecipeList extends Component {
  componentDidMount() {
    console.log("Recipes List has mounted.")
  }
  render(){
    console.log(this.props)
    return (
      <ul>

      </ul>
    )
  }
}

export default RecipeList;
