import React, { Component } from "react";


class Event extends Component {
    render(){
        const { event } = this.props
        return <div>
            <p className='title'>Learn JavaScript</p>
            <p className='date'>2020-05-19T16:00:00+02:00</p>
            <p className='time'>Europe/Berlin</p>
            <p className='place'>London, UK</p>
            <button type='button' className='details-btn'>show details</button>

        </div>
    }
}

export default Event;