import { connect } from 'react-redux';
import SingleComment from './single_comment';
import { createLike, deleteLike } from '../../actions/like_actions';

const mSTP = (state, ownProps) => {
    // debugger
    const commentLikes = Object.values(state.entities.likes).filter(like => like.likeableId === ownProps.comment.id && like.likeableType === "Comment");
    
    return {
        likes: commentLikes,
    }
};

const mDTP = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
});

export default connect(mSTP, mDTP)(SingleComment);