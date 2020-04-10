import React from 'react';
import { Link } from 'react-router-dom';
import { faHeart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class SingleComment extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(userLiked) {
        const { createLike, deleteLike, currentUserId, comment, likes } = this.props;

        if (userLiked) {
            let userLike = likes.find(like => like.authorId === currentUserId);
            deleteLike(userLike.id);
        } else {
            createLike({ author_id: currentUserId, likeable_id: comment.id, likeable_type: "Comment" });
        }
    }

    render() {

        const { author, comment, likes, currentUserId, deleteComment } = this.props;

        let userLiked = false;
  
        likes.forEach(like => {
            if (like.authorId === currentUserId) {
                userLiked = true;
            }
        });

        if (author === undefined) {
            // debugger
        }

        return (
            <div className="single-comment">
                <div className="single-comment-info">
                    <p><Link to={`/users/${author.id}`}>{`${author.firstName} ${author.lastName}`}</Link></p>
                    <h2>{comment.body}</h2>
                </div> 

                {  (likes.length !== 0) ?
                    <div className="lkn" >
                        <FontAwesomeIcon icon={faThumbsUp} style={{ width: '11px', height: '11px', color: '#385898' }} />&nbsp;{likes.length}
                    </div>: ""

                }
                    <button onClick={() => this.handleClick(userLiked)} className="lk">Like</button>
                {
                    (comment.authorId === currentUserId) ?
                        <button onClick={() => deleteComment(comment.id)} className="delete-comment">Delete Comment</button>
                        : ""
                }
            </div>
        )
    }
};