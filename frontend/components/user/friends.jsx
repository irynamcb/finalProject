import React from 'react';
import Friend from './friend';

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger
        if (this.props.friends.length === 0) {
            return (<div>
                No friends yet...
            </div>
            )
        }

        return (
            <div>
                     <p className="">Friends:</p>

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