import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, REMOVE_FRIEND } from "../actions/user_actions";

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
        case REMOVE_FRIEND:
            //debugger
            friendIdx = newState[action.friend.userId].friends.indexOf(action.friend.friendId);
            newState[action.friend.userId].friends.splice(friendIdx, 1);

            userIdx = newState[action.friend.friendId].friends.indexOf(action.friend.userId);
            newState[action.friend.friendId].friends.splice(userIdx, 1);
            return newState;
        default:
            return state;
    }
};

export default usersReducer;