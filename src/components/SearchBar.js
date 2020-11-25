// Search Bar component responsible for search input box

import React from 'react';

class SearchBar extends React.Component {

    state = { term : '' }

    onInputChange = (event) => {
        this.setState({ term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui two column grid">
                <div className="ui twelve wide column" />
            <div className="ui four wide column right floated">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Search</label><br />
                    <div  className="ui input right floated">
                                            
                        <input 
                            placeholder="Search News" 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                            />              
                                 
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default SearchBar;