import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
        //this is jsx code , not html
        // we use className instead of class, cause 'class' is a reserve word in Js
      <div className="App">
        <h1>header</h1>
        <Person name="tian" age="31"/>
        <Person name="chris" age="23"/>
        <Person name="mike" age="21"/>
      </div>
    );
    //jsx compiles to the code below
    //return React.createElement('div', {className: 'App'}, 'first text', 'second text', React.createElement('h1', null, 'third inner h1 text'));

  }
}

export default App;