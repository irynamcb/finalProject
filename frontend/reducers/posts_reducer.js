import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {CREATE_POST, REMOVE_POST} from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
        return Object.assign(newState, action.currentUser.posts);
        case RECEIVE_USER:
            return Object.assign(newState, action.user.posts);
        // case CREATE_POST:
        //     return Object.assign(nextState, action.user.posts);
        // case REMOVE_POST:
        //     delete nextState[Object.keys(action.user.posts)[0]];
        //     return nextState;
        default:
            return state;
    }
};

export default postsReducer;