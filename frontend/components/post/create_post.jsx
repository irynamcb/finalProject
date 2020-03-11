import React from 'react';

export default class CreatePost extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            body: "",
            author_id: props.author_id,
            parent_id: props.parent_id,
        };

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
                    <button type='submit'>{this.props.formType}</button>
                </form>
            </div>
        );
    }
}