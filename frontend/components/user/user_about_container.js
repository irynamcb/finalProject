import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {fetchUser} from '../../actions/user_actions';
import {sendRequest} from '../../actions/friend_requests_actions';
import UserAbout from './user_about';

const mSTP = (state, ownProps) => {
    // debugger
    let userId = Number(ownProps.match.params.userId);
    let arrPosts = Object.values(state.entities.posts);
    let userPosts = arrPosts.filter(post => post.authorId === userId || post.parentId === userId).sort((a, b) => b.id - a.id);
    let user = state.entities.users[Number(ownProps.match.params.userId)];
    // debugger

    if (user === undefined ) {
        return {};
    }

    let userFriends = user.friends.map(friendId => state.entities.users[friendId]);
    let friendRequests = user.friendRequests.map(friendId => state.entities.users[friendId]);
//    debugger
    if (userFriends === undefined || friendRequests === undefined) {
        return {};
    }

    return {
    user: user,
    posts: userPosts,
    friends: userFriends,
    friendRequests: friendRequests,
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id]
    };
};

const mDTP = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    sendRequest: (friendId) => dispatch(sendRequest(friendId))
});

export default withRouter(connect(mSTP, mDTP)(UserAbout));
