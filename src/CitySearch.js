import React, { Component } from "react";


class CitySearch extends Component {
    constructor(){
        super();

        this.state = { 
            query: '',
            suggestions: [],
            location: []
        }
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        this.setState({ 
            query: value,
            suggestions
         });
    }
    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion
        });
        this.props.updateEvents(suggestion);
    }
   
    render(){
        const { locations } = this.props
        return (
            <div className="CitySearch">
                <input
                    type="text"
                    className="city"
                    value={this.state.query}
                    placeholder="Search for a city"
                    onChange={this.handleInputChanged}
                />
                <ul className="suggestions">
                    {this.state.suggestions.map((suggestion) => (
                        <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
                    ))}
                    <li key='all' onClick={() => this.handleItemClicked('all')}>
                        <b>See all cities</b>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CitySearch;