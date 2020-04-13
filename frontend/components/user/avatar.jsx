import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";


export default class Avatar extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(photoFile) {
        // debugger
  
        let {user} = this.props;

        if (photoFile) {
            user.avatar = photoFile
            user.avatarUrl = null;
        }
        this.props.updateUser(user)
    }

    handleFile(e) {

        e.preventDefault();
        const file = e.currentTarget.files[0];
        e.currentTarget.value = null;
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.handleSubmit(file);
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
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