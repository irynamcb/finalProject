import React from 'react';
import PostItem from './post_item';

export default class PostList extends React.Component {
    constructor(props) {
        super(props)
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
                            this.props.posts.map(post => (
                                <PostItem
                                    post={post}
                                    key={post.id}
                                />
                            ))
                        }
                    </ul>
            </div>
        )
    }
};