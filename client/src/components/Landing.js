import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Grid, Row, Col } from 'react-bootstrap';

import { Sidebar } from './Sidebar';
import { Display } from './Display';



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
}
