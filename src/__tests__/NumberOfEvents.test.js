import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe('<CitySearch /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
    });
    test('render textbox element', () => {
        expect(NumberOfEventsWrapper.find('.EventsNumber')).toHaveLength(1);
    }); 
    test('render default number of events', () => {
        expect(NumberOfEventsWrapper.state('numOfEvents')).toBe(32);
    });
    test('change state when user changes number of events', () => {
        NumberOfEventsWrapper.find('.EventsNumber').simulate('change', {
            target: { value: 16 }
        })
        expect(NumberOfEventsWrapper.state('numOfEvents')).toBe(16);
    })
   



})