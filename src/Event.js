import React, { Component } from "react";
import moment from "moment/moment";

class Event extends Component {
    state = { 
        collapsed: true 
    }

    toggleDetails = () => {
        this.setState((prevState) => ({
            collapsed: !prevState.collapsed, 
        }))
    }

    render(){
        const { event } = this.props;
        const { collapsed } = this.state;
        
        return (<div className='event event-overview bg-white text-center p-8 shadow-[10px_10px_5px_0px_rgba(192,132,252)] '>
            <h2 className='title mb-2 text-xl sm:text-2xl font-semibold'>{event.summary}</h2>
            <p className='date text-lg sm:text-xl'>{moment(event.start.dateTime).format('MMM Do YYYY, h:mm a')}</p>
            <p className='place text-lg sm:text-xl'>{event.location}</p>
            {!collapsed && (
                <div className='event-details mt-6 text-lg sm:text-xl'>
                <div className='description'>{event.description}</div>
              </div >
            )}
            <button type='button' className='details-btn mt-6 text-lg sm:text-xl hover:bg-purple-400 active:bg-purple-500 text-black p-3 rounded-xl border border-solid border-slate-900' onClick={() => this.toggleDetails()}>
                    {collapsed ? 'Show details' : 'Hide details'}
            </button>

        </div>)
    }
}

export default Event;