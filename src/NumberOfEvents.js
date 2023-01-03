import React, {Component} from "react";

class NumberOfEvents extends Component {
    state = {
        numOfEvents: 32
    }

    changeNum(value) {
        this.setState({ numOfEvents: value});
    }

    render(){
        const {numOfEvents} = this.props
        return (
        <div className="NumberOfEvents">
        <input
            type="number"
            className="EventsNumber"
            min="1"
            max="32"
            value={numOfEvents}
            onChange={(event) => {
                this.changeNum(event.target.value)
            }}
        />
    </div>
        )   
    }
}

export default NumberOfEvents;