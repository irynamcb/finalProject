import React from 'react';
import { faClock, faHome, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        
        const { firstName, lastName, location, createdAt, education, about, birthday } = this.props.user;
        let cdate = new Date(createdAt);
        let joinedOn = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long"
        }).format(cdate);

        let bday = new Date(birthday);
        let bornOn = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        }).format(bday);
   
        return (
            <div className="user-about">
                <ul className="user-details">
                    <li className="user-fullname">
                        {firstName} {lastName}     
                    </li>
                    <br/>
                    <li className="user-detail">

                        {(location !== null) ? `Lives in ${location}` : ` `}
                    
                    </li>
                    
                    <li className="user-detail">
                        {(location !== null) ? `From ${location}` : ` `}
                    </li>
                    
                    <li className="user-detail">
                        <FontAwesomeIcon icon={faHome} /> Joined on {joinedOn}
                    </li>
                  
                    <li className="user-detail">
                        {(education !== null) ? `Studied at ${education}` : ` `}
                    </li>
                 
                    <li className="user-detail">
                        {(about !== null) ? `About Info: ${about}` : ` `}
                    </li>
                </ul>
                <div className="bodn-on">
                    Born on {bornOn}
                </div>
            </div>
        )
    }
};