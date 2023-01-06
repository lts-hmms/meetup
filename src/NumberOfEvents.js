import React, {Component} from "react";

class NumberOfEvents extends Component {
    state = {
        num: 32
    }
  
    handleNumChange(value) {
        this.setState({ num: value});
        this.props.updateNumOfEvents(value);
    }

    componentDidMount(){
        this.setState({ num: this.props.num || 32});
    }
   
    render(){
        const {num} = this.state
        return (
        <div className="NumberOfEvents">
            <label>
                Events to display: 
                <input type="number" className="EventsNumber" min={1} max={32} value={num}
                    onChange={(event) => this.handleNumChange(event.target.value)
                    }
                />
            </label>
    </div>
        )   
    }
}

export default NumberOfEvents;