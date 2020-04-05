import React from 'react';


export default class SingleComment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="single-comment">
                {this.props.author.firstName}
                {this.props.comment.body}
            </div>
        )
    }
};