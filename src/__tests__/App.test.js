import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });
    test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
});

describe('<App /> integration', () => {
    test('App passes "events" state as a prop to EventList', () => {
        const  AppWrapper = mount(<App />);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });
    test('App passes "locations" state as a prop to CitySearch', () => {
        const AppWrapper = mount(<App />);
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
})
    test('get list of events matching the city selected by the user', async() => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions:locations});
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random()*(suggestions.length));
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();
    });
    test('get list of all events when user selects "See all cities"', async() =>{
        const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect (AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount();
    });
    test('App passes "numOfEvents" state as prop to NumberOfEvents', () => {
        const AppWrapper = mount(<App />);
        const AppNumOfEventsState = AppWrapper.state('numOfEvents');
        expect(AppNumOfEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(NumberOfEvents).props().num).toEqual(AppNumOfEventsState);
        AppWrapper.unmount();
    })
    test('get number of events matching the number in input "EventsNumber"', async () => {
        const AppWrapper = mount(<App />);
        const NumOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        NumOfEventsWrapper.find('.EventsNumber').simulate('change', { target: {value:10}
        });
        await getEvents();
        expect (AppWrapper.state('numOfEvents')).toBe(10);
        AppWrapper.unmount();
    })
    test('rendered events match the content of mock API', async () => {
        const AppWrapper = mount(<App />);
        const NumOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        NumOfEventsWrapper.find('.EventsNumber').simulate('change', {
          target: { value: 1 }
        });
        await getEvents();
        expect(AppWrapper.state('events')).toEqual(mockData.slice(0, 1));
        AppWrapper.unmount();
      });
})