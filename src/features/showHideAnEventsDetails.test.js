import { loadFeature, defineFeature } from "jest-cucumber"
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature')

defineFeature(feature, test => {
    let AppWrapper;

    test('An event element is collapsed by default', ({ given, when, then }) => {
    	given('a list of all upcoming events', () => {
            AppWrapper = mount(<App/>);
    	});

    	when('the user does nothing after receiving the list', () => {

    	});

    	then('the event container are collapsed and show the core info of each event', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .details')).toHaveLength(0);
    	});
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
    	given('a list of upcoming events has been loaded', () => {
            AppWrapper = mount(<App/>);
    	});

    	when('the user click on “Show details“ button in an event container', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-btn').at(0).simulate('click');
    	});

    	then('the container expanded and shows the details of the event', () => {
            expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
    	});
    }); 
        test('User can collapse an event to hide its details', ({ given, when, then }) => {
            given('an event container which is extended', async () => {
                AppWrapper = await mount(<App />);
                AppWrapper.update();
                AppWrapper.find('.event .details-btn').at(0).simulate('click');
            });
    
            when('a user clicks “Hide details“', () => {
                AppWrapper.update();
                AppWrapper.find('.event .details-btn').at(0).simulate('click');
            });
    
            then('the container collapse and only shows the core info of that event', () => {
                expect(AppWrapper.find('.event .details')).toHaveLength(0);
            });
        });
    });