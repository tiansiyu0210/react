import React from 'react';

//a component is just a js function return jsx
const person = () => {
    return <p> i'm a person and I'm {Math.floor(Math.random() * 30)} years old !</p>
}

export default person;