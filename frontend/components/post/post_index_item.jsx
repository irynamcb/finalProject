import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = props => (
  <li>
    {props.post.body}
  </li>
);

export default PostIndexItem;