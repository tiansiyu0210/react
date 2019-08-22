import React from 'react';

//a component is just a js function return jsx
const person = (props) => {
    return (
        <div>
            <p> My name is {props.name} and I'm {props.age} years old !</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;