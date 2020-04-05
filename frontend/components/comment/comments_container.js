import { connect } from 'react-redux';
import CommentList from './comments';


const mSTP = (state, ownProps) => {


    let postId = Number(ownProps.match.params.postId);
    let post = state.entities.posts[postId];

    let comments = post.comments.map(commentId => state.entities.comments[commentId]);

    // const commentAuthors = comments.map(comment => state.entities.users[comment.authorId])

    if (post === undefined ) {
        return {};
    }
// debugger
    return {
        authors: state.entities.users,
        comments: comments
    }
  
};

const mDTP = dispatch => ({
//    
});

export default connect(mSTP, mDTP)(CommentList);