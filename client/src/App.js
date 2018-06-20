import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { Navigation } from './components/Navigation'

class App extends Component {
  componentDidMount() {
    window.fetch('api/recipes')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
        </div>
      </Router>
    );
  }
}

export default App;
