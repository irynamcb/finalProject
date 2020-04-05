import React from 'react';


export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <ul>
                    <p className="comments-total">Comments:</p>
                    {
                        this.props.comments.map(comment =>
                            <SingleCommet
                                comment={comment}
                                key={comment.id}
                            />)
                    }
                </ul>
            </div>
        )
    }
};