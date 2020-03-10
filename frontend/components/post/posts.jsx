import React from 'react';
import PostItem from './post_item';

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
    // debugger
    if (this.props.posts.length === 0) {
        return (<div>
            No posts yet...
        </div> 
        )}

    return (
    <div>
        <ul>
        {
        Object.keys(this.props.posts).map(postId => (
        <PostItem
            post={this.props.posts[postId]}
            key={postId}
        />
        ))
        }
        </ul>
    </div>
        )
    }
};