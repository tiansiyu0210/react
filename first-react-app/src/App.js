import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    // state can only be accessed in class-based components!
    state = {
        persons: [
            {name: "tian", age: "31" },
            {name: "chris", age: "23" },
            {name: "mike", age: "21" }
          ]
    }

    switchNameHandler =  () => {
        console.log("clicked");
    }

    render() {
        return (
            //this is jsx code , not html
            // we use className instead of class, cause 'class' is a reserve word in Js
          <div className="App">
            <h1>header</h1>
            {/* https://reactjs.org/docs/events.html#supported-events */}
            <button onClick={this.switchNameHandler}>switch name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          </div>
        );
        //jsx compiles to the code below
        //return React.createElement('div', {className: 'App'}, 'first text', 'second text', React.createElement('h1', null, 'third inner h1 text'));
  }
}

export default App;