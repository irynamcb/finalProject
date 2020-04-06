import * as CommentAPIUtil from '../util/comment_api_util';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

// regular action

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});


const createSingleComment = comment => ({
    type: CREATE_COMMENT,
    comment
});

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
});

// thunk actions
export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(createSingleComment(comment)))
);

export const deleteComment = commentId => dispatch => (
    CommentAPIUtil.deleteComment(commentId)
        .then(comment => dispatch(removeComment(comment)))
);
