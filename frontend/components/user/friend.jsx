import React from 'react';

export default class UserAbout extends React.Component {

    constructor(props) {
        super(props);
    }

render () {

    return (
        <div className="friend">
            {this.props.friend.firstName} {this.props.friend.lastName}
        </div>
    )
}

}