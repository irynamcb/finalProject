import React from 'react';
import { Link } from 'react-router-dom';

export default class FriendRequest extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        debugger
        const { firstName, lastName, id } = this.props.friend

        
        return (
            <div className="friend">
                <p><Link to={`/users/${id}`}>{firstName} {lastName}</Link></p>
                {(this.props.userId === this.props.currentUserId) ?
                    <button className="delete-friend">Confrim</button> : ""
                }
                {(this.props.userId === this.props.currentUserId) ?
                    <button className="delete-request">Delete Request</button> : ""
                }
            </div>
        )
    }
}