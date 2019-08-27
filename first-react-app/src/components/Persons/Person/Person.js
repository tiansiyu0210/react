import React, { Component } from 'react';


class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <React.Fragment>
                <p onClick={this.props.click}> My name is {this.props.name} and I'm {this.props.age} years old !</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeName} value={this.props.name}/>
            </React.Fragment>
        );
    }
}


export default Person;