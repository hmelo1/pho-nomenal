import React, { Component } from 'react';

class RecipeList extends Component {
  render(){
    const { recipes } = this.props
    let recipesList = recipes.map((recipe, index) => <li key={index}>{recipe.title}</li>)
    return (
      <ul>
        {recipesList}
      </ul>
    )
  }
}

export default RecipeList;
