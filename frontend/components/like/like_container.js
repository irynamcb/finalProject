import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Like from './like.jsx';
import { createLike, deleteLike } from '../../actions/like_actions.js';

const mSTP = (state, ownProps) => {

  let currentUser = state.session.id;
  let postId = ownProps.post.id;

  // let like = ???

  return {
    currentUser: currentUser,
    postId: postId,
    like: like,
  };
};

const mDTP = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  deleteLike: likeId => dispatch(deleteLike(likeId))
});

export default withRouter(connect(
  mSTP,
  mDTP
)(Like));