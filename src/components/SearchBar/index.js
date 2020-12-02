import React, { Component } from 'react';

class SearchBar extends Component {
    state = { username: "" };

    handleSubmit = e => {
        e.preventDefault();
        this.props.getResult(this.state.username);
    };

    updateInput = e => {
        const username = e.target.value;
        this.setState({ username });
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} onChange={this.updateInput} />
                <input type="submit" value="Search" />
            </form>
        );
    };
};

export default SearchBar;