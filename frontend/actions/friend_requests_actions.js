import * as FriendRequestAPIUril from '../util/friend_requests_util';

export const SEND_FRIEND_REQUEST = 'SEND_FRIEND_REQUEST';
export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST';

// regular actions

export const sendFriendRequest = data => ({
    type: SEND_FRIEND_REQUEST,
    data
});

const removeFriendRequest = data => ({
    type: REMOVE_FRIEND_REQUEST,
    data
});

// thunk actions

export const sendRequest = friendId => dispatch => {
    return FriendRequestAPIUril.sendRequest(friendId)
        .then(response => dispatch(sendFriendRequest(response)))
}

export const deleteRequest = requestId => dispatch => (
    FriendRequestAPIUril.deleteRequest(requestId)
        .then((request) => dispatch(removeFriendRequest(request)))
);