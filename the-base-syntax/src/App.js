import React, { Component } from 'react';
import './App.css';

// import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    username: 'Samir Sales'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  defaultUsernameHandler = (event) => {
    this.setState( {
      username: 'Default Username!!!'
    } )
  }

  changeUsernameHandler = (event) => {
    this.setState( {
      username: event.target.value
    } )
  }

  render () {
    const style = {
      backgroundColor: '#e0efe0',
      font: 'inherit',
      border: '1px solid #c0d0c0',
      padding: '6px',
      borderRadius: '4px',
      cursor: 'pointer'
    };

    const inputStyle = {
      height: '50px',
      borderRadius: '4px',
      padding: '4px',
      color: '#32b0de'
    };

    // <button
    // style={style}
    // onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
    // <Person
    //   name={this.state.persons[0].name}
    //   age={this.state.persons[0].age} />
    // <Person
    //   name={this.state.persons[1].name}
    //   age={this.state.persons[1].age}
    //   click={this.switchNameHandler.bind(this, 'Max!')}
    //   changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
    // <Person
    //   name={this.state.persons[2].name}
    //   age={this.state.persons[2].age} />


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>1st exercide</p>

        <button style={style}
          onClick={() => this.defaultUsernameHandler()}>Use Default User Name</button>

        <UserOutput username={this.state.username} />
        <UserInput intputStyle={inputStyle} changed={this.changeUsernameHandler} username={this.state.username} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
