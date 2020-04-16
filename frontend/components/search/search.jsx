import React from 'react';
import SearchItem from './search_item';

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        if (e.currentTarget.value !== "") {
            this.props.search(e.currentTarget.value);
        } else {
            this.props.clear();
        }
    }

    render() {

        return (
            <div >
                    <input type="text"
                    onChange={this.handleChange}
                    placeholder="Search"
                    className="search-bar"
                    />
                {
                    this.props.users.map(user =>
                    <SearchItem
                        user={user}
                        key={user.id} />)
                }
            </div>
        )
    }
}