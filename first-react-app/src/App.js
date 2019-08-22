import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personState, setPersonState] = useState({
        persons: [
            {name: "tian", age: "31"},
            {name: "chris", age: "23"},
            {name: "mike", age: "21"}
        ]
    });


    const [otherState, setOtherState] = useState({
        other: "some other state"
    });


    console.log(personState, otherState);

    const switchNameHandler = () => {
        setPersonState({
            persons: [
                {name: "siyu", age: "34"},
                {name: "shan", age: "22"},
                {name: "jj", age: "23"}
            ]
        });
    };


    return (
        <div className="App">
            <h1>header</h1>
            {/* https://reactjs.org/docs/events.html#supported-events */}
            <button onClick={switchNameHandler}>switch name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: racing</Person>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
        </div>
    );
    //jsx compiles to the code below
    //return React.createElement('div', {className: 'App'}, 'first text', 'second text', React.createElement('h1', null, 'third inner h1 text'))
}

export default app;




