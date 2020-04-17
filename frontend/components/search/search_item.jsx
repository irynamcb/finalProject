import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const {firstName, lastName, id} = this.props.user

        return (
            <div className="search-item">
                
                <li onClick={this.props.clearSearch}><Link to={`/users/${id}`}>{firstName} {lastName}</Link></li>

            </div>
        )
    }
}