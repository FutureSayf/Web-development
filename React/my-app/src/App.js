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

  switchNameHandler = (newName) =>
  {
    // 
    // Don't Do THIS/ this.state.persons[0].name = 'Anthony';
    this.setState(
    {
      persons: 
    [
      { name:  newName, age: 28},
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
        <button onClick={this.switchNameHandler.bind(this, 'Anthony')}>Switch Name</button>
        {/* <button onClick={() => this.switchNameHandler()}>Switch Name</button> */}
        {/* Minder efficient */}
        <Person
         name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
         name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Sayf!')} >My Hobbies: Racing</Person>
        <Person
         name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'does this work now?'));
  }
}

export default App;


// // functional component example with Hooks:

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';


// const app = props => 
// {
//   const [ personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28},
//       { name: 'Manu', age: 29},
//       { name: 'Stephanie', age: 26}
//     ]
//   });

//   const [otherState, setOtherState] = useState('Some other value');
  
//   console.log(personsState, otherState);

//   const switchNameHandler = () =>
//   {
//     // 
//     // Don't Do THIS/ this.state.persons[0].name = 'Anthony';
//     setPersonsState({
//       persons: [
//       { name: 'Anthony', age: 28},
//       { name: 'Mathew', age: 26},
//       { name: 'Marvin', age: 18}
//     ]
//     });
//   };


//   return (
//     <div className="App">
      
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
      
//       <button onClick={switchNameHandler}>Switch Name</button>
      
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />

//     </div>
//   );
// }

// export default app;
