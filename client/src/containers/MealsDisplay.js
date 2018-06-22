import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions'
import RecipeList from './RecipeList'

function mapStateToProps(state, ownProps){
  return {recipes: state.recipes}
}

class Meals extends Component {
  componentDidMount() {
    console.log("Meals Display has mounted.")
    this.props.actions.fetchRecipes()
  }

  render(){
    const { recipes } = this.props;

    return (
      <div>
        <RecipeList recipes={recipes} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(recipeActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
