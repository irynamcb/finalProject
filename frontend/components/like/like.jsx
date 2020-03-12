import React from 'react';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Like extends React.Component {
  constructor(props) {
    super(props);
  }

  like() {
    const { currentUser, postId, createLike } = this.props;

    let iconStyle ={
      width: '26px',
      height: '26px',
      color: 'red'
    }

    return (
      <div className="liked" 
        onClick={() => createLike({ post_id: postId, liker_id: currentUser })}><FontAwesomeIcon icon={faHeart} style={iconStyle} />
       </div>
    )
  }

  unlike() {
    const { like, deleteLike } = this.props;
    return <div className="unliked" onClick={() => deleteLike(like)}></i></div>
  }

  render() {
    return (
      <div className="like-post">
        {this.props.like === undefined ? this.like() : this.unlike()}
      </div>
    )
  }
}