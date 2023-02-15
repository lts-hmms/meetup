import React, { Component } from "react";

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null
    }

    getStyle = () => {
        return {
            color: this.color,
        };
    }

    render() {
        return (
            <div className='Alert text-lg'>
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}

export class ErrorAlert extends Alert {
    constructor (props) {
        super(props);
        this.color ='coral';
    }
}
