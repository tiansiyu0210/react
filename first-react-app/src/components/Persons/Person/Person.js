import React from 'react';
import classes from './Person.module.css';

//a component is just a js function return jsx
const person = (props) => {
    console.log('[Person.js] rendering...');
    return (
        <div className={classes.Person}>
            <p onClick={props.click}> My name is {props.name} and I'm {props.age} years old !</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name}/>
        </div>
    )
}

export default person;