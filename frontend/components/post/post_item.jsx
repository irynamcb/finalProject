import React from 'react';
import { Link } from 'react-router-dom';
import { faHeart, faThumbsUp, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PostItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.fetchPost(this.props.post.id);
    }

    componentWillUpdate() {
        // 
    }

    handleClick(userLiked){
        const { createLike, deleteLike, currentUserId, post, likes } = this.props;

        if (userLiked){
            let userLike = likes.find(like => like.authorId === currentUserId);
            deleteLike(userLike.id);
        } else {
            createLike({author_id: currentUserId, likeable_id: post.id, likeable_type: "Post"});
        }
    }

    render() {
        const { post, author, parent, likes, currentUserId } = this.props;

        let userLiked = false;

        likes.forEach(like => {
            if (like.authorId === currentUserId){
                userLiked = true;
            }
        });

        let iconStyleRed = {
            width: '16px',
            height: '16px',
            color: 'red'
        };

        let iconStyleGray = {
            width: '16px',
            height: '16px',
            color: 'gray'
        };

        return (
            <div className="single-post">
                <div className="single-post-info">
                    <p><Link to={`/users/${author.id}`}>{author.firstName} {author.lastName}</Link><FontAwesomeIcon icon={faCaretRight} style={iconStyleGray}/><Link to={`/users/${parent.id}`}>{parent.firstName} {parent.lastName}</Link></p>
                    <br/>
                    <h2>{post.body}</h2>
                <div className="likes-main">
                    <div className="number-of-likes">
                        {likes.length} <FontAwesomeIcon icon={faHeart} style={(likes.length === 0) ? iconStyleGray : iconStyleRed} />
                    </div>
                    <div className="like-btn">
                    <button onClick={() => this.handleClick(userLiked)}>{userLiked ? "Unlike" : "Like"}</button>
                    </div>
                    <button>Comment</button>
                    <button>Share</button>
                </div>    
                </div>
            </div>
        )
    }
};