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
        
        return (<div className='event-overview'>
            <p className='title'>{event.summary}</p>
            <p className='date'>{new Date(event.start.dateTime).toString()}</p>
            <p className='place'>{event.location}</p>
            
            {!collapsed && (
                <div className='event-details'>
                <p className='title'>{event.summary}</p>
                <p className='date'>{new Date(event.start.dateTime).toString()}</p>
                <p className='place'>{event.location}</p>
                <div className='description'>{event.description}</div>
              </div >
            )}
            <button type='button' className='details-btn' onClick={() => this.toggleDetails()}>
                    {collapsed ? 'Show details' : 'Hide details'}
            </button>

        </div>)
    }
}

export default Event;