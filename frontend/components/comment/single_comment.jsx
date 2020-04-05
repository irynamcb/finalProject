import React from 'react';
import { Link } from 'react-router-dom';


export default class SingleComment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
// debugger
        return (
            <div className="single-comment">
                <div className="single-comment-info">
                    <p><Link to={`/users/${this.props.author.id}`}>{`${this.props.author.firstName} ${this.props.author.lastName}`}</Link></p>
                    <br/>
                    <h2>{this.props.comment.body}</h2>
                </div>
                {
                (this.props.comment.authorId === this.props.currentUserId) ?
                <button onClick={() => this.props.deleteComment(this.props.comment.id)}>Delete Comment</button>
                : ""
                }
                
            </div>
        )
    }
};