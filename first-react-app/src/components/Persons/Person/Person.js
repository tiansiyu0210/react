import React, { Component } from 'react';
import classes from './Person.module.css';
import WithClass from '../../../hoc/WithClass';


class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}> My name is {this.props.name} and I'm {this.props.age} years old !</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeName} value={this.props.name}/>
            </WithClass>
        );
    }
}


export default Person;