import React from 'react';

export default class PostItem extends React.Component {
    constructor(props) {
        super(props)
    }

render() {
    return (
        <div>
            <p>
                {this.props.post.body}
            </p>
            <p>
                {this.props.post.authorId}
            </p> 
        </div>
        )
    }
};