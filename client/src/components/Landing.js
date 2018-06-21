import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeActions from '../actions/recipeActions'

import { Grid, Row, Col } from 'react-bootstrap';

import { Sidebar } from './Sidebar';
import { Display } from './Display';

/*
export const Landing = () => {
  return (
    <Grid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col lg={9}>
            <Display />
        </Col>
      </Row>
    </Grid>
  )
}*/

/*
window.fetch('api/recipes')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error))
}

if (this.props.recipes.length == 0){
  this.props.actions.fetchRecipes()
}
*/

class Landing extends React.Component {

  constructor(props){
    super(props)
    this.state = {recipes: []}
  }


  componentDidMount() {
    console.log(store.getState())
    this.setState({
      recipes: this.props.actions.fetchRecipes(),
    })
    console.log(this.state.recipes)
  }


  render(){
    return (
      <Grid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col lg={9}>
              <Display
                recipes={this.state.recipes}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {recipes: state.recipes}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(recipeActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

/*
componentDidMount() {
  window.fetch('api/recipes')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
}*/
