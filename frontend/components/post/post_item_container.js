import { connect } from 'react-redux';
import PostItem from './post_item';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { createLike, deleteLike } from '../../actions/like_actions';

const mSTP = (state, ownProps) => {
    const postLikes = Object.values(state.entities.likes).filter(like => like.likeableId === ownProps.post.id && like.likeableType === "Post");

    const postComments = ownProps.post.comments.map(commentId => state.entities.comments[commentId])
debugger
    return {
        parent: state.entities.users[ownProps.post.parentId],
        author: state.entities.users[ownProps.post.authorId],
        likes: postLikes,
        comments: postComments,
        currentUserId: state.session.id,
    }
};

const mDTP = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mSTP, mDTP)(PostItem);