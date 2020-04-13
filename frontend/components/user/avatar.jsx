import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";


export default class Avatar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoFile: null,
            avatarUrl: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearBody = this.clearBody.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const formData = new FormData();
        if (this.state.photoFile) {
            formData.append('user[avatar]', this.state.photoFile);
        }
    //    .then(() => this.clearBody());
    }

    handleFile(e) {

        e.preventDefault();
        const file = e.currentTarget.files[0];
        e.currentTarget.value = null;
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, avatarUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    clearBody() {
        this.setState({ photoFile: null, avatarUrl: null });
    }

    render() {

        let iconStyle = {
            width: '46px',
            height: '46px',
            color: '#666',
            padding: '16px'
        }

        const preview = this.state.avatarUrl ? <img src={this.state.avatarUrl} /> : <FontAwesomeIcon icon={faUserCircle} style={iconStyle} />;
        return (
            <div onClick={this.handleSubmit}>
                    <div className="">
                            <input type="file"
                                onChange={this.handleFile} />
                        </div>
                    {preview}
            </div>
        );
    }
}