import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FriendRequest from './friend_request';
// import { deleteFriend } from '../../actions/user_actions';

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.id,
})

const mDTP = dispatch => ({
    // deleteFriend: friendId => dispatch(deleteFriend(friendId)),
})

export default withRouter(connect(mSTP, mDTP)(FriendRequest));