import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Avatar from './avatar';
import { updateUser } from '../../actions/user_actions';



const mSTP = (state, ownProps) => {
    let user = state.entities.users[Number(ownProps.match.params.userId)];

    return {
        user: user
    }
}

const mDTP = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
})

export default withRouter(connect(mSTP, mDTP)(Avatar));