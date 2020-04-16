import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        

        return (
            <div className="">
                <li><Link to={`/users/${id}`}>{firstName} {lastName}</Link></li>
            </div>
        )
    }
}