import React from 'react';
import { Link } from 'react-router-dom';

export default class UserAbout extends React.Component {

    constructor(props) {
        super(props);
    }

render () {
    const {firstName, lastName} = this.props.friend
    return (
        <div className="friend">
            <p><Link to={`/users/${this.props.friend.id}`}>{firstName} {lastName}</Link></p>
        </div>
    )
}
}