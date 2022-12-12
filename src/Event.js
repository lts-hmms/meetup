import React, { Component } from "react";



class Event extends Component {
    state = { collapsed: true }
    toggleDetails = () => {
        this.setState((prevState) => ({
            collapsed: !prevState.collapsed, 
        }))
    }

    render(){
        const { event } = this.props;
        const { collapsed } = this.state;
        return <div>
            <p className='title'>Learn JavaScript</p>
            <p className='date'>2020-05-19T16:00:00+02:00</p>
            <p className='time'>Europe/Berlin</p>
            <p className='place'>London, UK</p>
            <button type='button' className='details-btn' onClick={() => this.toggleDetails()}>
                    {collapsed ? 'Show details' : 'Hide Details'}
            </button>

        </div>
    }
}

export default Event;