import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions'
import RecipeList from './RecipeList'

class Beverages extends Component {
  componentDidMount() {
    this.props.actions.fetchBeverages()
  }

  render(){
    const { recipes } = this.props;
    return (
      <div className="row">
        <RecipeList recipes={recipes} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {recipes: state.recipes}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(recipeActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Beverages);
