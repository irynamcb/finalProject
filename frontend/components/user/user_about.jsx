import React from 'react';
import { faClock, faHome, faMapMarkerAlt, faBaby } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostList from "../post/posts";
import CreatePostContainer from '../post/create_post_form_container';

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

        let iconStyle = {
            width: '36px',
            height: '36px',
            color: '#385898',
            padding: '16px'
        }
   
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
                        Joined on {joinedOn}
                    </li>
                  
                    <li className="user-detail">
                        {(education !== null) ? `Studied at ${education}` : ` `}
                    </li>
                 
                    <li className="user-detail">
                        {(about !== null) ? `About Info: ${about}` : ` `}
                    </li>
                </ul>
                <div className="user-about-info">

                <div className="user-create-post">
                <CreatePostContainer />
                </div>
                <div className="user-post">
                    <PostList posts={this.props.posts}/>
                </div>

                <div className="born-on">
                    <FontAwesomeIcon icon={faBaby} style={iconStyle} />
                    <br />
                    Born on {bornOn}
                </div>

                </div>
            </div>
        )
    }
};