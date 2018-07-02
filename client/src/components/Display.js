import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Appetizers from '../containers/Appetizers';
import Specials from '../containers/Specials';
import Beverages from '../containers/Beverages';
import MealsDisplay from '../containers/MealsDisplay';
import Reviews from './Reviews';
import Location from './Location';

export const Display = () => {
  return (
    <Switch>
      <Route exact path='/' component={ MealsDisplay } />
      <Route exact path='/appetizers' component={ Appetizers } />
      <Route exact path='/specials' component={ Specials } />
      <Route exact path='/beverages' component={ Beverages } />
      <Route exact path='/reviews' component={ Reviews } />
      <Route exact path='/location' component={ Location } />
    </Switch>
  )
}
