import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap'
import { Sidebar } from './Sidebar'

export const Display = () => {
  return (
    <Grid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col lg={9}>
          Testing2
        </Col>
      </Row>
    </Grid>
  )
}
