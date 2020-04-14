import React from 'react';
import { Link } from 'react-router-dom';
import { faHeart, faThumbsUp, faCaretRight, faComment, faShare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentsContainer from "../comment/comments_container";

export default class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showComments: false}

        this.handleClick = this.handleClick.bind(this);
        this.showComments = this.showComments.bind(this);
    }

    componentDidMount(){
        this.props.fetchPost(this.props.post.id);
    }

    componentWillUpdate() {
        // 
    }

    showComments() {
        event.preventDefault();
        this.setState({showComments: !this.state.showComments});
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
        const { post, author, parent, likes, currentUserId, comments, deletePost } = this.props;
        let userLiked = false;

        likes.forEach(like => {
            if (like.authorId === currentUserId){
                userLiked = true;
            }
        });

        let iconStyleBlue = {
            width: '16px',
            height: '16px',
            color: '385898'
        };

        let iconStyleGray = {
            width: '16px',
            height: '16px',
            color: 'gray'
        };

        let commentText;
        (comments.length === 1) ? commentText= "Comment" : commentText = "Comments";

        return (
            
            <div className="single-post">
                <div className="single-post-info">

                {
                    (author.id === parent.id) ? <p><Link to={`/users/${author.id}`}>{author.firstName} {author.lastName}</Link>Posted:</p> : 
                        
                    <p><Link to={`/users/${author.id}`}>{author.firstName} {author.lastName}</Link><FontAwesomeIcon icon={faCaretRight} style={iconStyleGray} /><Link to={`/users/${parent.id}`}>{parent.firstName} {parent.lastName}</Link></p>
                }
                <br/>
                    {
                        (author.id === currentUserId) ?
                            <button onClick={() => deletePost(post.id)} className="delete-post">Delete Post</button>
                            : ""
                    }

                    <h2>{post.body}</h2>
                    <div><img src={post.photoUrl} width="99%" /></div>

                    <div className="comments-likes">
                    { 
                        (likes.length !== 0) ?
                        <div className="like-btn">
                                    <FontAwesomeIcon icon={faThumbsUp} style={{ width: '11px', height: '11px', color: '#385898' }} />&nbsp;{likes.length}
                        </div>: ""
                    }
                    
                    {
                        (comments.length !== 0) ?
                            <div className="number-of-comments" onClick = {this.showComments}>
                                {comments.length} {commentText}
                            </div> : ""
                    }
                    </div>

                    <div className="likes-main">

                        <div className="like" onClick={() => this.handleClick(userLiked)}>
                        <FontAwesomeIcon icon={faThumbsUp} style={(userLiked) ? iconStyleBlue : iconStyleGray} />&nbsp;Like
                        </div>
                        <div className="comment" onClick={this.showComments} >
                        <FontAwesomeIcon icon={faComment} style={iconStyleGray} />&nbsp;Comment
                        </div>
                        {/* <div className="share">
                        <FontAwesomeIcon icon={faShare} style={iconStyleGray} />&nbsp;Share
                        </div> */}
                    </div>    
                </div>

                {
                    (this.state.showComments) ?
                        <div>
                            <CommentsContainer postId={post.id} />
                        </div> : ""
                }
            </div>
        )
    }
};