import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { mockData } from './mock-data';
import { extractLocations } from './api';

class App extends Component {
 
  render(){
    const events = this.state;
    return (
      <div className="App">
        <CitySearch locations={extractLocations}/>
        <EventList events ={mockData}/>
        <NumberOfEvents />
      </div>
    );
  }
  
}

export default App;
