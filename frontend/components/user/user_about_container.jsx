import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {fetchUser} from '../../actions/user_actions';
import UserAbout from './user_about';

const mSTP = (state, ownProps) => {
    debugger
    return ({
    user: state.entities.users[Number(ownProps.match.params.userId)],
    posts: state.entities.posts
    })
}

const mDTP = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default withRouter(connect(mSTP, mDTP)(UserAbout));
