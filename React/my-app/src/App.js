import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, Reacht app</h1>
        <p>Het werkt!</p>
        <Person />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'does this work now?'));
  }
}

export default App;
