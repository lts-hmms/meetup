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
            <p className='title'>Learn JavaScript</p>
            <p className='date'>2020-05-19T16:00:00+02:00</p>
            <p className='time'>Europe/Berlin</p>
            <p className='place'>London, UK</p>
            
            {!collapsed && (
                <div className='event-details'>
                <p className='title'>Learn JavaScript</p>
                <p className='date'>2020-05-19T16:00:00+02:00</p>
                <p className='time'>Europe/Berlin</p>
                <p className='place'>London, UK</p>
                <div className='description'>Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.</div>
              </div >
            )}
            <button type='button' className='details-btn' onClick={() => this.toggleDetails()}>
                    {collapsed ? 'Show details' : 'Hide details'}
            </button>

        </div>)
    }
}

export default Event;