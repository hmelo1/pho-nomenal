import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

  render(){
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
  }
}

export default Landing;
/*
componentDidMount() {
  window.fetch('api/recipes')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
}*/
