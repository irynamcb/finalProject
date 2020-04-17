import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class SearchItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const {firstName, lastName, id} = this.props.user

        return (
            <div className="search-item">
                
                <li><Link to={`/users/${id}`} onClick={this.props.clearSearch} >{firstName} {lastName}</Link></li>

            </div>
        )
    }
}