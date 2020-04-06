import React from 'react';
import { Link } from 'react-router-dom';
import { faHeart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class SingleComment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
// debugger
        const { author, comment, currentUserId } = this.props;
        if (author === undefined) {
            // debugger
        }

        return (
            <div className="single-comment">
                <div className="single-comment-info">
                    <p><Link to={`/users/${author.id}`}>{`${author.firstName} ${author.lastName}`}</Link></p>
                    <h2>{comment.body}</h2>
                </div> 
                {
                    (comment.authorId === currentUserId) ?
                        <button onClick={() => this.props.deleteComment(comment.id)} className="delete-comment">Delete Comment</button>
                        : ""
                }


                

                <div className="comments-likes">

                    {

                        (likes.length !== 0) ?
                            <div className="number-of-comments" onClick={this.showComments}>
                                {likes.length} <FontAwesomeIcon icon={faHeart} style={{ width: '11px', height: '11px', color: '#385898' }} />
                            </div> : ""
                    }

                </div>

                <div className="likes-main">

                    <div className="like" >
                        <button onClick={() => this.handleClick(userLiked)}>Like</button>
                    </div>
                </div>
           
           
           
            </div>





          
        )
    }
};