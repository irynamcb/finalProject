import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';


const mapStateToProps = state => ({
  post: {
    body: ''
  },
  posts : Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
  formType: 'Create Post'
});

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);