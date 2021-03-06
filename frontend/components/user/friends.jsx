import React from 'react';
import FriendContainer from './friend_container';
import { faUserFriends} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Friends extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    
        return (
        
            <div className="fr"> 
                <div className="friends-total"> <FontAwesomeIcon icon={faUserFriends} style={{ width: '24px', height: '24px', color: '#FF1493'}} />&nbsp;Friends&nbsp;:
                <span className="friends-number">
                {this.props.friends.length}
                </span>
                </div>
                    {
                        this.props.friends.map(friend => 
                            {if (friend !== undefined){
                            return <FriendContainer
                                friend={friend}
                                key={friend.id}
                                userId={this.props.userId}/>
                            }
                        })}
            </div>
        )
    }
};