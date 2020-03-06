import React from 'react';

export default class UserAbout extends React.Component {

    constructor(props) {
        super(props);
    }

componentDidMount() {
this.props.fetchUser(this.props.currentUser.id)
// not sure
}

    render () {
        return (
            <div className="user-about">
                <ul className="user-details">
                    <li className="user-detail">
                        {`${this.props.currentUser.firstName} ${this.props.currentUser.lastName}`}
                    </li>
                    <li className="user-detail">
                        {`Lives in ${this.props.currentUser.location}`}
                    </li>
                    <li className="user-detail">
                        {`From ${this.props.currentUser.location}`}
                    </li>
                    <li className="user-detail">
                        {`Joined on ${this.props.currentUser.created_at}`}
                    </li>
                    <li className="user-detail">
                        {`Studied at ${this.props.currentUser.education}`}
                    </li>
                    <li className="user-detail">
                        {`About Info: ${this.props.currentUser.about}`}
                    </li>
                </ul>
            </div>
        )
    }
}