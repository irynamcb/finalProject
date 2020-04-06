import React from 'react';


export default class CreateComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: "",
            author_id: props.author_id,
            post_id: props.post_id,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearBody = this.clearBody.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state).then(() => this.clearBody());
    }

    clearBody() {
        this.setState({ body: "" });
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {

        return (
            <div className="createcomment-container">
                <form onSubmit={this.handleSubmit} className="createcomment-form">
                    <div className="createpost-main">
                     
                        <div className="createcomment-body">
                            <input
                                type="text"
                                placeholder="Write a comment..."
                                value={this.state.body}
                                onChange={this.update('body')
                                }
                            />
                        </div>
                    </div>
                    {/* <button type='submit' className="createcomment-btn">Comment</button> */}
                </form>
            </div>
        );
    }
}