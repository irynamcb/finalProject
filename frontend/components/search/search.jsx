import React from 'react';
import { Link } from 'react-router-dom';

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // debugger
        e.preventDefault();

        if (e.currentTarget.value !== "") {
            // debugger
            this.props.search(e.currentTarget.value)
        }
    }

    render() {

        return (
            <div >
              
                    <input type="text"
                    onChange={this.handleChange}
                    placeholder="Search"
                    className=""
                    />
                    <div>
                        {
                        this.props.users.map(user => 
                        <li key={user.id}>{user.firstName}</li>
                        )
                        }
                    </div>
            </div>
        )
    }
}