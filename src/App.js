import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { EventGenre } from './eventGenre';
import { ErrorAlert } from './Alert';
import { extractLocations, getEvents, checkToken, getAccessToken  } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './nprogress.css';

class App extends Component {
  state = {
    events : [],
    locations: [],
    numOfEvents: 32,
    showWelcomeScreen: undefined
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number}
    })
    return data;
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

  async componentDidMount(){
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ 
            events: events,
            locations: extractLocations(events)
          });
        } 
      });
    }
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  
  render(){
    const { events, numOfEvents, locations, showWelcomeScreen} = this.state;
    const warningMessage = navigator.onLine ? "" : "App is running in offline mode, events are may not be up to date.";
    if( showWelcomeScreen === undefined) return <div className='App' />

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
          <ErrorAlert message={warningMessage} />
            <NumberOfEvents num={numOfEvents} updateNumOfEvents={(num) =>
                this.updateNumOfEvents(num)}
            />
            <CitySearch locations={locations} updateCityEvents={this.updateCityEvents}/>
          </div>
          <div className='data-vis-wrapper'>
            <EventGenre events={events} />
            <ResponsiveContainer height={400} >
              <ScatterChart
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 10,
                  left: 10,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="city" type="category" name="city" />
                <YAxis dataKey="number" type="number" name="number of events" />
                {/* <ZAxis dataKey="z" type="number" range={[64, 144]} name="score" unit="km" /> */}
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#a855f7" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <div className='p-6 items-center justify-center'>
            <EventList events ={events} numOfEvents={numOfEvents}/>
          </div>
        </div>
          <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
                getAccessToken={() => { getAccessToken() }} 
          />
      </div>
    );
  }
  
}

export default App;
