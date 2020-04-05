import { RECEIVE_POST } from '../actions/post_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_POST:
            return Object.assign(newState, action.post.comments);
        default:
            return state;
    }
};

export default commentsReducer;