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
      const locationEvents = location === 'all cities' ? 
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
        <div className="max-w-5xl mx-auto">
          <section className=' my-12 p-6 flex flex-col items-center justify-center gap-8'>
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
          </section>
          <section className='search mb-6 p-6 flex flex-col items-center justify-center sm:text-xl sm:flex-row gap-5 '>
            <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
            <NumberOfEvents num={this.state.numOfEvents} updateNumOfEvents={(num) =>
                this.updateNumOfEvents(num)}
            />
          </section>
          <section className='p-6 block items-center justify-center'>
            <EventList events ={this.state.events} />
          </section>
        </div>
      </div>
    );
  }
  
}

export default App;
