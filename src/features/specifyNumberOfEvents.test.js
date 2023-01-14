import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import App from "../App";
import { mount } from "enzyme";


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    	given('user has not specified the number of events', () => {
            
    	});

    	when('the eventlist is shown', () => {
            AppWrapper = mount(<App />);
    	});

    	then('the list contains a maximum of 32 events', () => {
            expect(AppWrapper.find('.EventList li').length).toBeLessThanOrEqual(32);
    	});
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
    	given('a list of upcoming events has been loaded', () => {
            AppWrapper = mount(<App />);
    	});

    	when('the user changes the number of events', () => {
            AppWrapper.find('.EventsNumber').simulate('change', { target: { value: 10 } });
    	});

    	then('the list of events is updated to a maximum of that number', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.EventList li').length).toBeLessThanOrEqual(10);
    	});
    });


})