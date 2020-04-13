import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";


export default class Avatar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoFile: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearBody = this.clearBody.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit() {
        // debugger
  
        let {user} = this.props;

        if (this.state.photoFile) {
            user.avatar = this.state.photoFile
        }
        this.props.updateUser(user).then(() => this.clearBody());
    }

    handleFile(e) {

        e.preventDefault();
        const file = e.currentTarget.files[0];
        e.currentTarget.value = null;
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.handleSubmit();
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    clearBody() {
        this.setState({ photoFile: null });
    }

    render() {

        let iconStyle = {
            width: '46px',
            height: '46px',
            color: '#666',
            padding: '16px'
        }

        const preview = this.props.user.avatarUrl ? <img src={this.props.user.avatarUrl} /> : <FontAwesomeIcon icon={faUserCircle} style={iconStyle} />;
        return (
            <div>
                    <div className="">
                            <input type="file"
                                onChange={this.handleFile} />
                        </div>
                    {preview}
            </div>
        );
    }
}