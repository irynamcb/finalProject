import React from 'react';
import { Link } from 'react-router-dom';

export default class Friend extends React.Component {

    constructor(props) {
        super(props);
    }

render () {
    const {firstName, lastName, id} = this.props.friend
    
    // debugger
    return (
        <div className="friend">
            <p><Link to={`/users/${id}`}>{firstName} {lastName}</Link></p>
            { (this.props.userId === this.props.currentUserId) ?
            <button onClick={() => this.props.deleteFriend(id)}>Delete Friend</button> : ""
            }
        </div>
    )
}
}