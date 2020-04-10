import React from 'react';
import SingleCommentContainer from './single_comment_container';
import CreateCommentContainer from './create_comment_form_container';

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.comments === undefined) {
            return null;
        }
        return (
            <div className="user-comments">
                <ul>
                    <p className="comments-total">Comments:</p>
                    {
                        this.props.comments.map(comment =>
                            <SingleCommentContainer
                                comment={comment}
                                key={comment.id}
                                author={this.props.authors[comment.authorId]}
                                currentUserId={this.props.currentUserId}
                                deleteComment={this.props.deleteComment}
                            />)
                    }
                </ul>
                <div className="user-create-post">
                    <CreateCommentContainer  postId={this.props.postId}/>
                </div>
            </div>
        )
    }
};