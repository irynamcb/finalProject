import React from 'react';
import PostItemContainer from './post_item_container';

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
            
        <p className="posts-total">Posts</p>
           
        {
        this.props.posts.map(post => 
        <PostItemContainer
            post={post}
            key={post.id}
        />
        )
        }
        </ul>
    </div>
        )
    }
};