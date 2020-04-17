import React from 'react';
import SearchItem from './search_item';

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.state = {searchKey: ""};
        
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ searchKey: e.currentTarget.value })
        if (e.currentTarget.value !== "") {
            this.props.search(e.currentTarget.value);
        } else {
            this.props.clear();
        }
    }

    clearSearch() {
        this.setState({ searchKey: "" });
        this.props.clear();
    }


    render() {

        return (
            <div className="search">
                    <input type="text"
                    value={this.state.searchKey}
                    onChange={this.handleChange}
                    placeholder="Search"
                    className="search-bar"
                    />
                    <div className="search-results">
                {
                    this.props.users.map(user =>
                    <SearchItem
                        user={user}
                        key={user.id} 
                        clearSearch={this.clearSearch}/>)
                }
                    </div>
            </div>
        )
    }
}