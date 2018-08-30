import React, { Component } from 'react';
import './App.css';
import Resume from './components/Resume';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(
      "Wondering how this was made?\n\n" +
      "Check it out here:\n" +
      "https://github.com/ClaytonPassmore/resume"
    );
  }

  render() {
    return (<Resume/>);
  }
}

export default App;
