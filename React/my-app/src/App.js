import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component 
{
  state = 
  {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Mathew', age: 26},
      { name: 'Marvin', age: 8}
    ],
    otherState: 'some other date'
  }

  switchNameHandler = () =>
  {
    // 
    // Don't Do THIS/ this.state.persons[0].name = 'Anthony';
    this.setState(
    {
      persons: 
    [
      { name: 'Anthony', age: 28},
      { name: 'Mathew', age: 26},
      { name: 'Marvin', age: 18}
    ]
    })
  }
  render() 
  {
    return (
      <div className="App">
        <h1>Hello, React app</h1>
        <p>Het werkt!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'does this work now?'));
  }
}

export default App;
