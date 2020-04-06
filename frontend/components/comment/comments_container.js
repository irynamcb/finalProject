import { connect } from 'react-redux';
import Comments from './comments';
import {deleteComment} from '../../actions/comment_action';
import { withRouter } from 'react-router-dom';


const mSTP = (state, ownProps) => {

    let postId = ownProps.postId;
    let post = state.entities.posts[postId];
    let comments = post.comments.map(commentId => state.entities.comments[commentId]);

    // const commentAuthors = comments.map(comment => state.entities.users[comment.authorId])

    if (post === undefined || Object.keys(state.entities.comments).length === 0) {
        return {};
    }
    
    return {
        authors: state.entities.users,
        postId: postId,
        comments: comments,
        currentUserId: state.session.id
    }
  
};

const mDTP = dispatch => ({
    deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default withRouter(connect(mSTP, mDTP)(Comments));