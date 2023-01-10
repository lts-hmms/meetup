import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
    render(){
        const { events } = this.props;
        return (
            <ul className='EventList list-none mx-auto my-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8'>
                {events.map(event => 
                    <li key={event.id}>
                       <Event event={event} /> 
                    </li>
                    )}
            </ul>
        )
    }
}

export default EventList;