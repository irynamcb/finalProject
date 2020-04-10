import React from 'react';
import FriendRequestContainer from './friend_request_container';
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class FriendRequests extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
        <div >

            { (this.props.userId === this.props.currentUserId) ?
              
            <div className="fr">
                <div className="friends-total"> <FontAwesomeIcon icon={faUserFriends} style={{ width: '24px', height: '24px', color: '#3CB371' }} />&nbsp;Friend Requests 
                <span className="friend-requests-number">
                    {this.props.friendRequests.length}
                </span>
                </div>
                {
                    this.props.friendRequests.map(friend => {
                        if (friend !== undefined) {
                            return <FriendRequestContainer
                                friend={friend}
                                key={friend.id}
                                userId={this.props.userId}
                            />
                        }
                    })
                } </div> : ""
            }  
        </div>      
        )
    }
};