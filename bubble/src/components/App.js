import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import '../css/App.css';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="NavWrapper">
              <NavBar/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
