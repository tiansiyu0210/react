import React, { Component } from 'react';
import Person from "./Person/Person";


class Persons extends Component {
    static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return nextProps.persons !== this.props.persons
    }

    getSnapshotBeforeUpdate(pervProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Persons.getSnapshotBeforeUpdate'};
    }

    componentDidUpdate(pervProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((p, index) => {
            return (
                <Person
                    name={p.name}
                    age={p.age}
                    click={() => this.props.click(index)}
                    key={p.id}
                    changeName={(event) => this.props.changeName(event, p.id)}
                />)
        });
    }


}



export default Persons;