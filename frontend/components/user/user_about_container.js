import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {fetchUser} from '../../actions/user_actions';
import {sendRequest} from '../../actions/friend_requests_actions';
import UserAbout from './user_about';

const mSTP = (state, ownProps) => {
    let userId = Number(ownProps.match.params.userId);
    let arrPosts = Object.values(state.entities.posts);
    let userPosts = arrPosts.filter(post => post.authorId === userId || post.parentId === userId).sort((a, b) => b.id - a.id);
    let user = state.entities.users[Number(ownProps.match.params.userId)];
    let userFriends = user.friends.map(friendId => state.entities.users[friendId]);
   
    if (userFriends === undefined) {
        return {};
    }

    return {
    user: user,
    posts: userPosts,
    friends: userFriends,
    currentUserId: state.session.id
    };
};

const mDTP = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    sendRequest: (friendId) => dispatch(sendRequest(friendId))
});

export default withRouter(connect(mSTP, mDTP)(UserAbout));
