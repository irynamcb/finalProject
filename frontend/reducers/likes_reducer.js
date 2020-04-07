import { CREATE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_POST } from '../actions/post_actions';
import {RECEIVE_COMMENT} from '../actions/comment_action';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  let like;

  switch(action.type) {
    case CREATE_LIKE:
      like = Object.values(action.like)[0];
      newState[like.id] = like;
      return newState;
    case REMOVE_LIKE:
      like = Object.values(action.like)[0];
      delete newState[like.id];
      return newState;
    case RECEIVE_POST:
      return Object.assign(newState, action.post.likes);
    default:
      return state;
  }
};


export default likesReducer;