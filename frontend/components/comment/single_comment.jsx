import React from 'react';
import { Link } from 'react-router-dom';


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
                    <br/>
                    <h2>{comment.body}</h2>
                </div>
                {
                (comment.authorId === currentUserId) ?
                <button onClick={() => this.props.deleteComment(comment.id)}>Delete Comment</button>
                : ""
                }
                
            </div>
        )
    }
};