import React from 'react';
import { Link } from 'react-router-dom';

export default class PostItem extends React.Component {
    constructor(props) {
        super(props)
    }

render() {
    const { post, author, parent } = this.props;

    return (
        <div className="single-post">
            <div className="single-post-info">
                <p>From: <Link to={`/users/${author.id}`}>{author.firstName} {author.lastName}</Link></p><br/>
                <p>To: <Link to={`/users/${parent.id}`}>{parent.firstName} {parent.lastName}</Link></p><br/>
                <h2>{post.body}</h2>
            </div>
        </div>
        )
    }
};