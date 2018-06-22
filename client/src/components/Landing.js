import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import { Sidebar } from './Sidebar';
import { Display } from './Display';

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
