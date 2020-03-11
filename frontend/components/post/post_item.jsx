import React from 'react';
import { Link } from 'react-router-dom';

export default class PostItem extends React.Component {
    constructor(props) {
        super(props)
    }

render() {
    const { post, author, parent } = this.props;

    return (
        <div>
            <p>
                From: <Link to={`/users/${author.id}`}>{author.firstName} {author.lastName}</Link> <br/>
                To: <Link to={`/users/${parent.id}`}>{parent.firstName} {parent.lastName}</Link> <br/>
                {post.body}
            </p>
        </div>
        )
    }
};