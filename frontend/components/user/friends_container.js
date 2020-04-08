import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Friends from './friends';

const mSTP = (state, ownProps) => {
  
    const userFriends = ownProps.friends.map(friendId => state.entities.users[friendId])
    
    return {
        friends: userFriends
    };
}

const mDTP = dispatch => ({
    
})

export default withRouter(connect(mSTP, mDTP)(Friends));
