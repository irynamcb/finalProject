import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FriendRequest from './friend_request';
import {deleteRequest} from '../../actions/friend_requests_actions';
import {}

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.id,
})

const mDTP = dispatch => ({
    deleteRequest: (requestId) => dispatch(deleteRequest(requestId)),

})

export default withRouter(connect(mSTP, mDTP)(FriendRequest));