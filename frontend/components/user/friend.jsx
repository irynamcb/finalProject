import React from 'react';
import { Link } from 'react-router-dom';

export default class Friend extends React.Component {

    constructor(props) {
        super(props);
    }

 

render () {
    const {firstName, lastName} = this.props.friend
    return (
        <div className="friend">
            <button onClick={() => this.props.deleteFriend(this.props.friend.id)}>Delete Friend</button>
            <p><Link to={`/users/${this.props.friend.id}`}>{firstName} {lastName}</Link></p>

        </div>
    )
}
}