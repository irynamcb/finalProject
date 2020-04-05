import React from 'react';
import SingleComment from './comment_item';

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.comments === undefined) {
            return null;
        }
// debugger
        return (
            <div>
                <ul>
                    <p className="comments-total">Comments:</p>
                    {
                        this.props.comments.map(comment =>
                            <SingleComment
                                comment={comment}
                                key={comment.id}
                                author={this.props.authors[comment.authorId]}
                            />)
                    }
                </ul>
            </div>
        )
    }
};