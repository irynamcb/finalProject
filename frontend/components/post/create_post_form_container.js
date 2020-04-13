import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import PostForm from './post_form';
import CreatePost from './create_post';
import { createPost } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    formType: 'Create Post',
    author_id: state.session.id,
    author: state.entities.users[state.session.id],
    parent_id: Number(ownProps.parentId),
}};

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(createPost(post))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));