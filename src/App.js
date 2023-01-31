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

  updateCityEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = location === 'all cities' ? 
      events : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      })
    });
  }

  updateNumOfEvents = (numOfEvents) => {
    getEvents().then(() => {
      this.setState({
        numOfEvents: numOfEvents
      }) 
    })
  }

  componentDidMount(){
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
      this.setState({ 
        events: events,
        locations: extractLocations(events)
      });
    }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  
  render(){
    const { events, numOfEvents, locations} = this.state;

    return (
      <div className="App">
        <div className="max-w-5xl mx-auto">
          <div className=' my-12 p-6 flex flex-col items-center justify-center gap-8'>
          <h2
              className="text-center text-4xl font-bold text-slate-900 sm:text-5xl"
          >
              MeetUp
          </h2>
          <p
              className="max-w-md text-center text-2xl text-purple-500 sm:text-3xl"
          >
              Discover great events in your favorite city!
          </p>
          </div>
          <div className='search p-6 flex flex-col items-center justify-center sm:text-xl sm:flex-row gap-5 '>
            <NumberOfEvents num={numOfEvents} updateNumOfEvents={(num) =>
                this.updateNumOfEvents(num)}
            />
            <CitySearch locations={locations} updateCityEvents={this.updateCityEvents}/>
          </div>
          <div className='p-6 items-center justify-center'>
            <EventList events ={events} numOfEvents={numOfEvents}/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
