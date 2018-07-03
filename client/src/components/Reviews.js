import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import ReviewsForm from '../containers/ReviewsForm';

class Landing extends React.Component {

  render(){
    return (
      <Grid bsClass="">
        <Row>
          <Col lg={12}>
            Leave a review!
            < ReviewsForm />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Landing;
