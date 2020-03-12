import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { CREATE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch(action.type) {

  case RECEIVE_CURRENT_USER:
    return Object.assign(newState, action.currentUser.posts.likes);
  case RECEIVE_USER:
    return Object.assign(newState, action.user.posts.likes);


    // case CREATE_LIKE:
    //   likeId = Object.keys(action.payload)[0];
    //   nextState[likeId] = action.payload[likeId];
    //   return nextState;

    // case DELETE_LIKE:
    //   likeId = Object.keys(action.payload)[0];
    //   delete nextState[likeId];
    //   return nextState;
  default:
    return state;
  }

};


export default likesReducer;