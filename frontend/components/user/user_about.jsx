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
        let cdate = new Date(createdAt);
        let joinedOn = new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long"
        }).format(cdate);
   
        return (
            <div className="user-about">
                <ul className="user-details">
                    <li className="user-detail">
                        {firstName} {lastName}     
                    </li>
                    <li className="user-detail">

                        {(location !== null) ? `Lives in ${location}` : ` `}
                    
                    </li>
                    <li className="user-detail">
                        {(location !== null) ? `From ${location}` : ` `}
                    </li>
                    <li className="user-detail">
                        Joined on {joinedOn}
                    </li>
                    <li className="user-detail">
                        {(education !== null) ? `Studied at ${education}` : ` `}
                    </li>
                    <li className="user-detail">
                        {(about !== null) ? `About Info: ${about}` : ` `}
                    </li>
                </ul>
            </div>
        )
    }
};