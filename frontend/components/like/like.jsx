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
    };

    return (
      <div className="liked" 
        onClick={() => createLike(like)}><FontAwesomeIcon icon={faHeart} style={iconStyle} />
       </div>
    )
  }

  unlike() {
    const { like, deleteLike } = this.props;
    return (
    <div className="unliked" onClick={(likeId) => deleteLike(likeId)}><FontAwesomeIcon icon={faHeart}/>
    </div>
    )
  }

  render() {
    return (
      <div className="like-post">
        {this.props.like === undefined ? this.like() : this.unlike()}
      </div>
    )
  }
}