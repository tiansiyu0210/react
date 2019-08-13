import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        //this is jsx code , not html
        // we use className instead of class, cause 'class' is a reserve word in Js
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          111To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>another header</h1>
      </div>
    );
    //jsx compiles to the code below
    //return React.createElement('div', {className: 'App'}, 'first text', 'second text', React.createElement('h1', null, 'third inner h1 text'));

  }
}

export default App;