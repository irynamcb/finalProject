import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

// regular action
export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

// thunk action
export const fetchUser = userId => dispatch => {
    return UserAPIUtil.fetchUser(userId)
    .then (user => dispatch(receiveUser(user)))
}