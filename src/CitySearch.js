import React, { Component } from "react";
import { ErrorAlert } from "./Alert";


class CitySearch extends Component {
    state = { 
        query: '',
        suggestions: [],
        showSuggestions: undefined
    }


    handleInputChange = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: "No city found. Please try again."
            });
        } else {
        this.setState({ 
            query: value,
            suggestions,
            infoText: ''
         });
        }
    }
    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false,
            infoText: ''
        });
        this.props.updateCityEvents(suggestion);
    }
    
    handleFocus = (event) => {
        this.setState({
            showSuggestions: true
        })
        if (!this.query) {
            this.setState({
                suggestions: this.props.locations
            })
        }
    }
   
    render(){
        return (
            <div className="CitySearch">
                <ErrorAlert text={this.state.infoText} />
            <label> 
                <input
                    type="text"
                    className="city relative max-w-4xl text-black text-xl sm:text-2xl p-3 rounded-t-lg focus:border-2 focus:border-purple-400 focus:outline-none shadow-md"
                    value={this.state.query}
                    placeholder="Search for a city"
                    onChange={this.handleInputChange}
                    onFocus={this.handleFocus}
                    />
             </label>
                <ul className="suggestions bg-white py-2 px-3 text-xl sm:text-2xl text-left rounded-b-lg shadow-md" style={this.state.showSuggestions ? {}: { display:'none'}}>
                    <div className="text-right">
                        <button type="button" className= "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 " 
                        onClick={() => { this.setState({showSuggestions: false })}}>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {this.state.suggestions.map((suggestion) => (
                        <li className="cursor-pointer" key={suggestion} onClick={() => this.handleItemClicked(suggestion) && this.setState({ showSuggestions: false })}>{suggestion}</li>
                    ))}
                    <li className="cursor-pointer" key='all' onClick={() => this.handleItemClicked('all cities')}>
                        <b>See all cities</b>
                    </li>
                </ul>
               
            </div>
            
           
        )
    }
}

export default CitySearch;