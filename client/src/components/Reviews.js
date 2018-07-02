import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import ReviewsDisplay from '../containers/ReviewsDisplay';

class Landing extends React.Component {

  render(){
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            Leave a review!
            < ReviewsDisplay />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Landing;
