import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {fetchUser} from '../../actions/user_actions';
import UserAbout from './user_about';

const mSTP = (state, ownProps) => {
    let userId = Number(ownProps.match.params.userId);
    let arrPosts = Object.values(state.entities.posts);
    let userPosts = arrPosts.filter(post => post.authorId === userId || post.parentId === userId).sort((a, b) => b.id - a.id);

    return {
    user: state.entities.users[Number(ownProps.match.params.userId)],
    posts: userPosts,
    };
};

const mDTP = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default withRouter(connect(mSTP, mDTP)(UserAbout));
