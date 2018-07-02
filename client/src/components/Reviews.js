import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import ReviewsList from '../containers/ReviewsList';

class Landing extends React.Component {

  render(){
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            Reviews!
            < ReviewsList />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Landing;
