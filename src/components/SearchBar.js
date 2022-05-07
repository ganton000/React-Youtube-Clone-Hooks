import React from 'react';

class SearchBar extends React.Component{

    state = { text: '' };

    onInputChange = (event) => {
        const { value } = event.target;

        this.setState({ text: value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.text)
    };

    render() {
        return(
            <div className="search-bar ui segment">
                <form
                onSubmit={this.onFormSubmit}
                className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                        onChange={this.onInputChange}
                        value={this.state.text}
                        type="text" />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar;