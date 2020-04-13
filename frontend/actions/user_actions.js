import * as UserAPIUtil from '../util/user_api_util';
import * as FriendAPIUtil from '../util/friends_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_USER = 'UPDATE_USER';

// regular action
export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const removeFriend = friend => ({
    type: REMOVE_FRIEND,
    friend
});

const addFriend = friendId => ({
    type: ADD_FRIEND,
    friendId
});

const updateSingleUser = user => ({
    type: UPDATE_USER,
    user
})

// thunk action
export const fetchUser = userId => dispatch => {
    return UserAPIUtil.fetchUser(userId)
    .then (user => dispatch(receiveUser(user)))
}

export const updateUser = user => dispatch => {
    return UserAPIUtil.updateUser(user)
    .then (user => dispatch(updateSingleUser(user)))
}

export const deleteFriend = friendId => dispatch => (
    FriendAPIUtil.deleteFriend(friendId)
        .then((friend) => dispatch(removeFriend(friend.friend)))
);

export const acceptFriend = friendId => dispatch => (
    FriendAPIUtil.acceptFriend(friendId)
        .then((friend) => dispatch(addFriend(friend.friend)))
);