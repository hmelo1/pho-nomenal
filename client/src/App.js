import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation'

import Landing from './components/Landing'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          < Navigation />
          < Landing />
        </div>
      </Router>
    );
  }
}

export default App;