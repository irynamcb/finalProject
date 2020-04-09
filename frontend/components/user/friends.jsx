import React from 'react';
import Friend from './friend';
import { faUserFriends} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Friends extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    
        // let f;
        // if (this.props.friends[0] !== undefined) {
        //     f = this.props.friends[0];
        // } else {
        //     f = { id: 4, firstName: 'bar', lastName: 'foo' }
        // }
    // debugger
        return (
        
            <div>
                <p className="friends-total"> <FontAwesomeIcon icon={faUserFriends} style={{ width: '24px', height: '24px', color: '#FF1493'}} />&nbsp;Friends</p>
                    {
                        this.props.friends.map(friend => 
                            {if (friend !== undefined){
                            return <Friend
                                friend={friend}
                                key={friend.id}
                            />
                            }
                        })}
            </div>
        )
    }
};