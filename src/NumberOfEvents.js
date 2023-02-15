import React, {Component} from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
    state = {
        num: 32
    }
  
    handleNumChange(value) {
        if(value < 1 | value > 32 || value % 1 !== 0){
        this.setState({ 
            num: value,
            errorText: 'Choose a number from 1 to 32.'
        });
    } else {
        this.setState({ 
            num: value,
            errorText: ''
        });
        this.props.updateNumOfEvents(value);
    }
    }

    componentDidMount(){
        this.setState({ num: this.props.num});
    }
   
    render(){
        const {num} = this.state
        return (
        <div className="NumberOfEvents text-xl sm:text-2xl">
            <ErrorAlert text={this.state.errorText} />
            <label>
                Events you want to see: 
                <input type="number" className="EventsNumber ml-3 max-w-4xl text-black p-3 rounded-full focus:border-2 focus:border-purple-400 focus:outline-none shadow-md" min={1} max={32} value={num}
                    onChange={(event) => this.handleNumChange(event.target.value)
                    }
                />
            </label>
    </div>
        )   
    }
}

NumberOfEvents.defaultProps = {
    num: 32
};

export default NumberOfEvents;