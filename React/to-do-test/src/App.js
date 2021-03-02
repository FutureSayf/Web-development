import React, { Component } from 'react'; 
import './App.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

class App extends Component {
  render(){

    return (
      <div className="App">
        <Calendar />
      
      </div>
    );

  }
  
}

export default App;
