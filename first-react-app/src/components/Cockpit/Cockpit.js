import React, { useEffect, useRef } from 'react';
import cockpitClasses from "./Cocktip.module.css";

//Component name should start with Capital letter
const Cockpit = (props) => {

    const btnRef = useRef(null);

    //useEffect run after render the jsx
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //fake Http request...
        // const timer = setTimeout(() => {
        //     alert('save data in cloud');
        // }, 1000);
        btnRef.current.click();
        return () => {
            //clearTimeout(timer);
            console.log('[Cockpit.js] clean up in useEffect')
        }
    }, []);//if we use empty array [] here, it only run once.

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] clean up in 2nd useEffect')
        }
    })

    let buttonRed = '';

    if(props.showPersons){
        buttonRed = cockpitClasses.Red;
    }

    const pClasses = [];

    console.log(pClasses);

    if(props.personsLen <= 2){
        pClasses.push(cockpitClasses.red);
    }

    if(props.personsLen <= 1){
        pClasses.push(cockpitClasses.bold);
    }

    return (
        <div className={cockpitClasses.Cockpit}>
            <h1>{props.title}</h1>
            <p className={pClasses.join(' ')}>this is really working</p>
            {/* https://reactjs.org/docs/events.html#supported-events */}
            <button ref={btnRef} className={buttonRed} onClick={props.toggle}>show/hide person</button>
        </div>
    );
}

export default React.memo(Cockpit);