import React, { Component } from 'react';
import classes from './Person.module.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';


class Person extends Component {
    // constructor(){
    //     this.inputElData = React.createRef()
    // }

    componentDidMount(){
        this.inputElData.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click}> My name is {this.props.name} and I'm {this.props.age} years old !</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changeName}
                    value={this.props.name}
                    ref={(inputEl) => {this.inputElData = inputEl}}
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changeName: PropTypes.func
}

export default withClass(Person, classes.Person);