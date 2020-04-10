import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FriendRequest from './friend_request';
import {deleteRequest} from '../../actions/friend_requests_actions';
import {acceptFriend} from '../../actions/user_actions';

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.id,
})

const mDTP = dispatch => ({
    acceptFriend: (friendId) => dispatch(acceptFriend(friendId)),
    deleteRequest: (requestId) => dispatch(deleteRequest(requestId))
})

export default withRouter(connect(mSTP, mDTP)(FriendRequest));