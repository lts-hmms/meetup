import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
    render(){
        const { events, numOfEvents } = this.props;
        return (
            <ul className='EventList list-none mx-auto my-12 grid sm:grid-cols-2 lg:auto-cols-max items-start justify-center gap-8'>
                {(numOfEvents ? events.slice(0, numOfEvents) : events).map(event => 
                    <li key={event.id}>
                       <Event event={event} /> 
                    </li>
                    )}
            </ul>
        )
    }
}

export default EventList;