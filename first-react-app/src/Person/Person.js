import React from 'react';

//a component is just a js function return jsx
const person = (props) => {
    return (
        <div>
            <p onClick={props.passClick}> My name is {props.name} and I'm {props.age} years old !</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name}/>
        </div>
    )
}

export default person;