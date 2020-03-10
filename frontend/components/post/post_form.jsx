import React from 'react';


class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     post: this.props.post,
     showingPost = false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

// add click handler

  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Body
            <textarea
              value={this.state.body}
              onChange={this.update('body')}
            />
          </label>
          <button type='submit' value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default PostForm;
