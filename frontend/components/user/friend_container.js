import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Friend from './friend';
import {deleteFriend} from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
    
}

const mDTP = dispatch => ({
    deleteFriend: friendId => dispatch(deleteFriend(friendId)),
})

export default withRouter(connect(mSTP, mDTP)(Friend));
