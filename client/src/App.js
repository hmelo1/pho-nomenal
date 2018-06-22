import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { Navigation } from './components/Navigation'

import Landing from './components/Landing'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Landing />
        </div>
      </Router>
    );
  }
}

export default App;
/*
componentDidMount() {
  window.fetch('api/recipes')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
}*/
