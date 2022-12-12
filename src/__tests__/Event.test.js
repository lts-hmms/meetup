
import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;
    let event = mockData[0]
    beforeAll(() => {
        EventWrapper = shallow(<Event/>)
    });

    /**
     * Feature 2, Scenario 1: An event element is collapsed by default
     */
test('render event title', () => {
    expect(EventWrapper.find('.title')).toHaveLength(1);
});
test('render correct summary as title', () => {
    expect(EventWrapper.find('.title').text()).toBe(event.summary);
});
test ('render overview infos', () => {
    expect(EventWrapper.find('.date','.time','.city')).toHaveLength(1)
})
test('render correct date', () => {
    expect(EventWrapper.find('.date').text()).toBe(event.start.dateTime);
});
test('render correct timezone', () => {
    expect(EventWrapper.find('.time').text()).toBe(event.start.timeZone);
});
test('render correct place', () => {
    expect(EventWrapper.find('.place').text()).toBe(event.location);
});
test('render details button', () => {
    expect(EventWrapper.find('.details-btn').type()).toEqual('button');
})
test('renders collapsed state as default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
test('change state when details-button clicked', () => {
    EventWrapper.setState({
        collapsed:'true'
    });
    EventWrapper.find('.details-btn').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
})

})