import React from 'react';

export default class UserAbout extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.props.fetchUser(Number(this.props.match.params.userId))
        }
    }

componentDidMount() {
    this.props.fetchUser(Number(this.props.match.params.userId))
}

    render () {
        if (this.props.user === undefined) {
            return null;
        }
        
        const { firstName, lastName, location, createdAt, education, about } = this.props.user;
   
        return (
            <div className="user-about">
                <ul className="user-details">
                    <li className="user-detail">
                        {firstName} {lastName}
                      
                    </li>
                    <li className="user-detail">
                        Lives in {location}
                    </li>
                    <li className="user-detail">
                        From {location}
                    </li>
                    <li className="user-detail">
                        Joined on {createdAt}
                    </li>
                    <li className="user-detail">
                        Studied at {education}
                    </li>
                    <li className="user-detail">
                        About Info: {about}
                    </li>
                </ul>
            </div>
        )
    }
}