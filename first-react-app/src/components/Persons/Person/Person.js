import React, { Component } from 'react';
import classes from './Person.module.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import PersonAuth from '../../../context/auth-context';


class Person extends Component {

    constructor(props){
        super(props);
        this.inputElRef = React.createRef()
    }

    componentDidMount(){
        //this.inputElData.focus();
        this.inputElRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <PersonAuth.Consumer>
                    {context => context.auth ? <p> logged in </p> : <p> logged out </p>}
                </PersonAuth.Consumer>
                <p onClick={this.props.click}> My name is {this.props.name} and I'm {this.props.age} years old !</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changeName}
                    value={this.props.name}
                    //ref={(inputEl) => {this.inputElData = inputEl}}
                    ref={this.inputElRef}
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