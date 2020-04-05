import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createComment, deleteComment } from '../../actions/comment_action';
import CreateComment from './create_comment';


const mSTP = (state, ownProps) => {
    return {
        formType: 'Add Comment',
        author_id: state.session.id,
        post_id: Number(ownProps.postId),
    }
};

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment)) 
});

export default withRouter(connect(mSTP, mDTP)(CreateComment));