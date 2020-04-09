import * as UserAPIUtil from '../util/user_api_util';
import * as FriendAPIUtil from '../util/friends_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

// regular action
export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const removeFriend = friend => ({
    type: REMOVE_FRIEND,
    friend
});

// thunk action
export const fetchUser = userId => dispatch => {
    return UserAPIUtil.fetchUser(userId)
    .then (user => dispatch(receiveUser(user)))
}

export const deleteFriend = friendId => dispatch => (
    FriendAPIUtil.deleteFriend(friendId)
        .then((friend) => dispatch(removeFriend(friend.friend)))
);