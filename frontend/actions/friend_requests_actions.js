import * as FriendRequestAPIUril from '../util/friend_requests_util';

export const SEND_FRIEND_REQUEST = 'SEND_FRIEND_REQUEST';
export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST';

// regular actions

export const sendFriendRequest = request => ({
    type: SEND_FRIEND_REQUEST,
    request
});

const removeFriendRequest = request => ({
    type: REMOVE_FRIEND_REQUEST,
    request
});

// thunk actions

export const sendRequest = request => dispatch => {
    return FriendRequestAPIUril.sendRequest(request)
        .then(user => dispatch(sendFriendRequest(request)))
}

export const deleteRequest = requestId => dispatch => (
    FriendRequestAPIUril.deleteRequest(requestId)
        .then((request) => dispatch(removeFriendRequest(request)))
);