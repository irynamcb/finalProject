import * as LikeAPIUtil from '../util/like_api_util';

export const CREATE_LIKE = 'CREATE_LIKE';
export const REMOVE_LIKE= 'REMOVE_LIKE';
export const RECEIVE_LIKES = 'RECEIVE_LIKES';

// regular action
const createSingleLike = like => ({
  type: CREATE_LIKE,
  like
});

const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});


// thunk actions
export const createLike= like => dispatch => (
  LikeAPIUtil.createLike(like)
    .then(like => dispatch(createSingleLike(like)))
);

export const deleteLike = likeId => dispatch => (
  LikeAPIUtil.deleteLike(likeId)
    .then(like => dispatch(removeLike(like)))
);

export const receiveAllLikesForPost = post => dispatch => (
  LikeAPIUtil.fetchAllLikesForPost(post)
  .then(likes => receiveLikes(likes))
);