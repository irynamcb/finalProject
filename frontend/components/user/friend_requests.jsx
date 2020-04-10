import React from 'react';
import FriendRequestContainer from './friend_request_container';
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class FriendRequests extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
debugger
        return (

            <div className="fr">
                <div className="friends-total"> <FontAwesomeIcon icon={faUserFriends} style={{ width: '24px', height: '24px', color: 'green' }} />&nbsp;Friend Requests</div>
                {
                    this.props.friendRequests.map(friend => {
                        if (friend !== undefined) {
                            return <FriendRequestContainer
                                friend={friend}
                                key={friend.id}
                                userId={this.props.userId}
                            />
                        }
                    })}
            </div>
        )
    }
};