import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state={
    userName: 'Tony' 
  }

  nameChangedHandler = (event) =>{
    this.setState({userName: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput x </li>
          <li>UserInput should hold an input element, UserOutput two paragraphs x</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)x</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there x</li>
          <li>Add state to the App component (= the username) and pass the username to the UserOutput component x</li>
          <li>Add a method to manipulate the state (= an event-handler method)x</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <UserInput change={this.nameChangedHandler} currentName={this.state.userName}/>
        <UserOutput userName='Sayf' age='38'/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
      </div>
    );
  }
}

export default App;
