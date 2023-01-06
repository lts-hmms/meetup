import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events : [],
    locations: [],
    numOfEvents: 32,
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = location === 'all' ? 
      events : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numOfEvents)
      });
    });
  }

  updateNumOfEvents(num) {
    this.setState({
      numOfEvents: num
    })
  }

  componentDidMount(){
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
      this.setState({ events: events.slice(0, this.state.numOfEvents),
        locations: extractLocations(events)
      });
    }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  
  render(){
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <EventList events ={this.state.events} />
        <NumberOfEvents num={this.state.numOfEvents} updateNumOfEvents={(num) =>
              this.updateNumOfEvents(num)}
          />
      </div>
    );
  }
  
}

export default App;
