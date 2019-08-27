import React, { Component } from 'react';
import appClasses from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';

class App extends Component{
    constructor(props){
        super(props);
        console.log('[App.js] constructor');
    }



    // state can only be accessed in class-based components!
    state = {
        persons: [
            {id:'p1', name: "tian", age: "31" },
            {id:'p2',name: "chris", age: "23" },
            {id:'p3',name: "mike", age: "21" }
          ],
        showPersons: false,
        showCockpit: true,
        counter: 0
    }

    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount(){
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(pervProps, prevState){
        console.log('[App.js] getSnapshotBeforeUpdate');
        return {message: 'App.getSnapshotBeforeUpdate'};
    }

    componentDidUpdate(pervProps, prevState, snapshot){
        console.log('[App.js] componentDidUpdate');
        console.log(snapshot);
    }



    deletePersonHandler = (currentIndex) => {
        //const oldPerson = this.state.persons.splice();  or
        const oldPerson = [...this.state.persons]
        oldPerson.splice(currentIndex, 1);
        this.setState(
            {
                persons: oldPerson
            }
        )
    }

    changeNameHandler =  (event, id) => {
        //console.log("changeNameHandler");
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        //const personFind = Object.assign({}, this.state.persons[personIndex]);  or

        const personFind = {
            ...this.state.persons[personIndex]
        }

        personFind.name = event.target.value;

        const oldPersons = [...this.state.persons];
        oldPersons[personIndex] = personFind;

        this.setState((prevState, props) => {
            return {
                persons: oldPersons,
                counter: prevState.counter + 1
            };
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    }

    render() {
        console.log('[App.js] render');

        let persons = null;

        if(this.state.showPersons){
            persons = <Persons
                       persons={this.state.persons}
                       click={this.deletePersonHandler}
                       changeName={this.changeNameHandler}
                      />

        }



        return (
            //this is jsx code , not html
            // we use className instead of class, cause 'class' is a reserve word in Js
                <Aux>
                    <button onClick={() => {
                        this.setState({showCockpit: false})}}> Remove Cockpit </button>
                    {
                        this.state.showCockpit ? <Cockpit
                        title={this.props.title}
                        toggle={this.togglePersonsHandler}
                        personsLen={this.state.persons.length}
                        showPersons={this.state.showPersons}
                        /> : null
                    }
                    {persons}
                </Aux>

        );
        //jsx compiles to the code below
        //return React.createElement('div', {className: 'App'}, 'first text', 'second text', React.createElement('h1', null, 'third inner h1 text'));
  }
}

// lecture 67: run "sudo npm install --save radium"
export default withClass(App, appClasses.App);




