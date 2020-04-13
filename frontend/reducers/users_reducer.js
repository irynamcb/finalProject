import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, REMOVE_FRIEND, ADD_FRIEND, UPDATE_USER } from "../actions/user_actions";
import { SEND_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST} from '../actions/friend_requests_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    let userId;
    let friendIdx;
    let userIdx;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            userId = Number(Object.keys(action.currentUser.users)[0])
            newState[userId] = action.currentUser.users[userId];
            return Object.assign(newState, action.currentUser.otherUsers);
        case RECEIVE_USER:
            return Object.assign(newState, action.user.users, action.user.otherUsers);
        case UPDATE_USER:
            return Object.assign(newState, action.user.users, action.user.otherUsers);
        case REMOVE_FRIEND:
            friendIdx = newState[action.friend.userId].friends.indexOf(action.friend.friendId);
            newState[action.friend.userId].friends.splice(friendIdx, 1);
            userIdx = newState[action.friend.friendId].friends.indexOf(action.friend.userId);
            newState[action.friend.friendId].friends.splice(userIdx, 1);
            return newState;
        case SEND_FRIEND_REQUEST:
            newState[action.data.friendId].friendRequests.push(action.data.userId)
            return newState;
        case REMOVE_FRIEND_REQUEST:
            userIdx = newState[action.data.friendId].friendRequests.indexOf(action.data.userId);
            newState[action.data.friendId].friendRequests.splice(userIdx, 1);
            return newState;
        case ADD_FRIEND:
            newState[action.friendId.userId].friends.push(action.friendId.friendId)
            newState[action.friendId.friendId].friends.push(action.friendId.userId)
            userIdx = newState[action.friendId.userId].friendRequests.indexOf(action.friendId.friendId);
            newState[action.friendId.userId].friendRequests.splice(userIdx, 1);
            return newState;
        default:
            return state;
    }
};

export default usersReducer;