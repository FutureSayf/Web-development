import React, { Component } from 'react';
import './App.css';
// import person from './Person/Person';
import Person from './Person/Person';

class App extends Component 
{
  state = 
  {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28},
      { id: 'vasdf1', name: 'Mathew', age: 26},
      { id: 'asdf11', name: 'Marvin', age: 8}
    ],
    otherState: 'some other date',
    showPersons: false
  }

  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personsIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }
  render() 
  
  
  {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div >
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) =>this.nameChangedHandler(event, person.id)}  />
            })}
            {/* <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Sayf!')} 
              changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} /> */}
          </div> 
      );

    }
    return (
      <div className="App">
        <h1>Hello, React app</h1>
          <p>Het werkt!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
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
