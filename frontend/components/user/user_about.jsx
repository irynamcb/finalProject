import React from 'react';
import { faBaby, faUserPlus, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostList from "../post/posts";
import CreatePostContainer from '../post/create_post_form_container';
import Friends from './friends';
import FriendRequests from './friend_requests';
import AvatarContainer from './avatar_container';

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

        this.props.fetchUser(Number(this.props.match.params.userId));

    }

    render () {
        if (this.props.user === undefined) {
            return null;
        }
        const { firstName, lastName, location, createdAt, education, about, birthday, id } = this.props.user;

        let showAddFriend = true;
        let showFriendRequest = false;
        
        if (this.props.user.friendRequests.includes(this.props.currentUserId)) {
            showFriendRequest = true;
            showAddFriend = false;
        } 

        if (this.props.currentUserId === id || this.props.user.friends.includes(this.props.currentUserId) || this.props.currentUser.friendRequests.includes(this.props.user.id)) {
            showAddFriend = false;
        }

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
            <div className="about-block">
                <div className="user-details">
                    <div className='friends-total'>
                            <FontAwesomeIcon icon={faGlobeAmericas} style={{ width: '24px', height: '24px', color: '#3578E5'}} />&nbsp;Intro
                    </div>
                    <li style={{fontWeight: '700'}}>{firstName} {lastName}</li>

                    { (id === this.props.currentUserId) ?
                            <div className="user-avatar">
                                <div id="wrapper">
                                    <AvatarContainer user={this.props.user} />
                                </div>
                            </div> : ""
                    }

                    { (showAddFriend) ?
                            <button onClick={() => this.props.sendRequest(id)} className="add-friend"><FontAwesomeIcon icon={faUserPlus} style={{ width: '13px', height: '13px', color: '#fff'}} />&nbsp;Add Friend</button> : (showFriendRequest) ? 
                            <div className='sent'>Friend Request Sent</div> : ""
                    }
                    
                    {
                        (!showAddFriend && this.props.currentUser.friendRequests.includes(this.props.user.id)) ? 
                        <div className='sent'>This user has sent you a friend request</div> : ""

                    }
                    
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
                </div>

                <div className="user-friends-all">
                    <Friends friends={this.props.friends} userId={this.props.user.id}/>
                </div>

                <div className="user-friends-all">
                    <FriendRequests friendRequests={this.props.friendRequests} userId={this.props.user.id} currentUserId={this.props.currentUserId}/>
                </div>

            </div>
                
                <div className="user-about-info">

                {/* <div className="user-create-post"> */}
                    <CreatePostContainer parentId={id} />
                {/* </div> */}
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