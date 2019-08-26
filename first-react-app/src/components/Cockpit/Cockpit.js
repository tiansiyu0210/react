import React from 'react';
import cockpitClasses from "./Cocktip.module.css";

const cockpit = (props) => {

    let buttonRed = '';

    if(props.showPersons){
        buttonRed = cockpitClasses.Red;
    }

    const pClasses = [];

    console.log(pClasses);

    if(props.persons.length <= 2){
        pClasses.push(cockpitClasses.red);
    }

    if(props.persons.length <= 1){
        pClasses.push(cockpitClasses.bold);
    }

    return (
        <div className={cockpitClasses.Cockpit}>
            <h1>header</h1>
            <p className={pClasses.join(' ')}>this is really working</p>
            {/* https://reactjs.org/docs/events.html#supported-events */}
            <button className={buttonRed} onClick={props.toggle}>show/hide person</button>
        </div>
    );
}

export default cockpit;