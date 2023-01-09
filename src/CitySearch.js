import React, { Component } from "react";


class CitySearch extends Component {
    constructor(){
        super();
        
        this.state = { 
            query: '',
            suggestions: [],
            showSuggestions: undefined
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
            query: suggestion,
            showSuggestions: false
        });
        this.props.updateEvents(suggestion);
    }
    
    handleFocus = (event) => {
        const value = event.target.value
        this.setState({
            showSuggestions: true
        })
        if (!value || value === 'all cities') {
            this.setState({
                suggestions: this.props.locations
            })
        } else {
            this.handleInputChanged(event)
        }
    }
   
    render(){
        const { locations } = this.props

        return (
            <div className="CitySearch">
            <label> 
            
            
                <input
                    type="text"
                    className="city max-w-4xl text-black text-xl sm:text-2xl p-3 rounded-t-lg focus:border-2 focus:border-purple-400 focus:outline-none shadow-md"
                    value={this.state.query}
                    placeholder="Search for a city"
                    onChange={this.handleInputChanged}
                    onFocus={this.handleFocus}
                    onBlur={() => {this.setState({ showSuggestions: false})}}
                    />
             </label>
                <ul className="suggestions text-left cursor-pointer text-xl sm:text-2xl bg-white py-2 px-3 rounded-b-lg shadow-md" style={this.state.showSuggestions ? {}: { display:'none'}}>
                    {this.state.suggestions.map((suggestion) => (
                        <li key={suggestion} onClick={() => this.handleItemClicked(suggestion) && this.setState({ showSuggestions: false })}>{suggestion}</li>
                    ))}
                    <li key='all' onClick={() => this.handleItemClicked('all cities')}>
                        <b>See all cities</b>
                    </li>
                </ul>
               
            </div>
            
           
        )
    }
}

export default CitySearch;