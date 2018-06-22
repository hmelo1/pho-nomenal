import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar, Grid, Row, Col, Modal } from 'react-bootstrap'
import Appetizers from '../containers/Appetizers';
import Breakfast from '../containers/Breakfast';
import MealsDisplay from '../containers/MealsDisplay';

export const Display = () => {
  return (
    <Switch>
      <Route exact path='/' component={ MealsDisplay } />
      <Route exact path='/appetizers' component={ Appetizers } />
      <Route exact path='/breakfast' component={ Breakfast } />
    </Switch>
  )
}
