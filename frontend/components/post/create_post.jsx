import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";

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

    render() {

        let iconStyle = {
            width: '46px',
            height: '46px',
            color: '#666',
            padding: '16px'
        }

        return (
            <div className="createpost-container">
            <div className="createpost-title">
                <h3>{this.props.formType}</h3>
                <h3>Photo/Video</h3>
                <h3>Live Video</h3>
                <h3>Live Event</h3>
            </div>
                <form onSubmit={this.handleSubmit} className="createpost-form">
                <div className="createpost-main">
                    <div className="createpost-avatar">
                        <FontAwesomeIcon icon={faUserCircle} style={iconStyle}/>
                    </div>
                    <div className="createpost-body">
                    <input
                            type="text"
                            placeholder="Whats' on your mind?"
                            value={this.state.body}
                            onChange={this.update('body')
                            }
                        />
                    </div>
                    </div>
                        <button type='submit' className="createpost-btn">Post</button>
                    
                </form>
            </div>
        );
    }
}