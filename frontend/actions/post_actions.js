import * as PostApiUtil from '../util/post_api_util';


export const CREATE_POST = 'CREATE_POST';
export const REMOVE_POST = 'REMOVE_POST';


const createSinglePost = post => ({
  type: CREATE_POST,
  post
});

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});


export const createPost = post => dispatch => (
  PostApiUtil.createPost(post)
    .then(post => dispatch(createSinglePost(post)))
);

export const deletePost = postId => dispatch => (
  PostApiUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
);