import React from 'react';
import Friend from './friend';
import { faUserFriends} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger

        // if (this.props.friends === undefined) {
        //     return null;
        // }
        return (
            <div>
                <p className=""> <FontAwesomeIcon icon={faUserFriends} style={{ width: '24px', height: '24px', color: '#FF1493'}} />&nbsp;Friends</p>
                    {
                        this.props.friends.map(friend =>
                            <Friend
                                friend={friend}
                                key={friend.id}
                            />
                        )
                    }    
            </div>
        )
    }
};