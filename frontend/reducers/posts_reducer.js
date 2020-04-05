import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {CREATE_POST, REMOVE_POST} from "../actions/post_actions";
import {CREATE_COMMENT} from '../actions/comment_action';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    let comment;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
        return Object.assign(newState, action.currentUser.posts);
        case RECEIVE_USER:
            return Object.assign(newState, action.user.posts);
        case CREATE_POST:
            return Object.assign(newState, action.post.posts);
        case CREATE_COMMENT:
            comment = Object.values(action.comment.comments)[0];
            newState[comment.postId].comments.push(comment.id);
            return newState;
        // case REMOVE_POST:
        //     delete newtState[Object.keys(action.user.posts)[0]];
        //     return newtState;
        default:
            return state;
    }
};

export default postsReducer;