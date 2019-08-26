import React from 'react';
import Person from "./Person/Person";


const persons = (props) => {
    console.log('[Persons.js] rendering...');
    return props.persons.map((p, index) => {
        return (
            <Person
                name={p.name}
                age={p.age}
                click={() => props.click(index)}
                key={p.id}
                changeName={(event) => props.changeName(event, p.id)}
            />)
    });
}



export default persons;