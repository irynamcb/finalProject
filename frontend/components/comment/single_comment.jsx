import React from 'react';


export default class SingleComment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
// debugger
        return (
            <div className="single-comment">
                {`${this.props.author.firstName} ${this.props.author.lastName}`}
                <br/>
                {this.props.comment.body}


                {
                (this.props.comment.authorId === this.props.currentUserId) ?
                <button onClick={() => this.props.deleteComment(this.props.comment.id)}>Delete Comment</button>
                : ""
                }
                
            </div>
        )
    }
};