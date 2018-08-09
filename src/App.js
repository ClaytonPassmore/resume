import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Resume}/>
      </BrowserRouter>
    );
  }
}

export default App;
