import * as LikeAPIUtil from '../util/like_api_util';

export const CREATE_LIKE = 'CREATE_LIKE';
export const REMOVE_LIKE= 'REMOVE_LIKE';


const createSingleLike = like => ({
  type: CREATE_LIKE,
  like
});

const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId
});


export const createLike= like => dispatch => (
  LikeApiUtil.createLike(like)
    .then(like => dispatch(createSingleLike(like)))
);

export const deleteLike = likeId => dispatch => (
  LikeApiUtil.deleteLike(likeId)
    .then(() => dispatch(removeLike(likeId)))
);