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
        <div className="NumberOfEvents text-xl sm:text-2xl">
                Events you want to see: 
                <input type="number" className="EventsNumber ml-3 max-w-4xl text-black p-3 rounded-full focus:border-2 focus:border-purple-400 focus:outline-none shadow-md" min={1} max={32} value={num}
                    onChange={(event) => this.handleNumChange(event.target.value)
                    }
                />
    </div>
        )   
    }
}

export default NumberOfEvents;