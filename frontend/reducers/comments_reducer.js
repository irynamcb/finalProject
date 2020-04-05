import { RECEIVE_POST } from '../actions/post_actions';
import {CREATE_COMMENT, REMOVE_COMMENT} from '../actions/comment_action';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    let comment;

    switch (action.type) {
        case RECEIVE_POST:
            return Object.assign(newState, action.post.comments);
        case CREATE_COMMENT:
            comment = Object.values(action.comment)[0];
            newState[comment.id] = comment;
            return newState;
        case REMOVE_COMMENT:
            comment = Object.values(action.comment)[0];
            delete newState[comment.id];
            return newState;
        default:
            return state;
    }
};

export default commentsReducer;