import { connect } from 'react-redux';
import PostItem from './post_item';

const mSTP = (state, ownProps) => {
    return {
        parent: state.entities.users[ownProps.post.parentId],
        author: state.entities.users[ownProps.post.authorId],
    }
};

export default connect(mSTP)(PostItem);