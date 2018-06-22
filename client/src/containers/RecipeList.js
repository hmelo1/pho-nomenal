import React, { Component } from 'react';

class RecipeList extends Component {
  componentDidMount() {
    console.log("Recipes List has mounted.")
    console.log(this.state)
    console.log(this.props)
  }
  render(){
    return (
      <div>
        RecipeList
      </div>
    )
  }
}

export default RecipeList;
