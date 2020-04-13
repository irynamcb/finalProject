import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Avatar from './avatar';




const mSTP = (state, ownProps) => {
    let user = state.entities.users[Number(ownProps.match.params.userId)];

    return {
        user: user
    }
}


export default withRouter(connect(mSTP)(Avatar));