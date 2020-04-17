import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";
import AutosizeInput from 'react-input-autosize';

export default class CreatePost extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            body: "",
            author_id: props.author_id,
            parent_id: props.parent_id,
            photoFile: null,
            photoUrl: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearBody = this.clearBody.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount(){
   
    }

    componentWillUpdate(prevProps){

        const { parent_id } = prevProps;
        if( parent_id !== this.props.parent_id) this.setState({parent_id: parent_id, body: ""});
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        formData.append('post[author_id]', this.state.author_id);
        formData.append('post[parent_id]', this.state.parent_id);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        this.props.action(formData).then(() => this.clearBody());
    }

    handleFile(e) {

        e.preventDefault();
        const file = e.currentTarget.files[0];
        e.currentTarget.value = null;
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
    if (file) {
       fileReader.readAsDataURL(file);
    }
    }

    clearBody(){
        this.setState({body: "", photoFile: null, photoUrl: null});
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {

    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} width="20%" height="20%"/> : null;
    return (
        <div className="createpost-form">
        <form onSubmit={this.handleSubmit} className="">
            <div className="createpost-main">
                    <div className="createpost-avatar" id="wrapper">
                        <img src={this.props.author.avatarUrl}/>
                </div>
                <div className="createpost-body">
                    <AutosizeInput
                            type="text"
                            placeholder="What's on your mind?"
                            value={this.state.body}
                            onChange={this.update('body')
                            }
                        />
                </div>

                    <label htmlFor="m" className="custom-file-input">
                        <input type="file"
                            id="m"
                            className="custom-file-input"
                            onChange={this.handleFile} />
                    </label>
                  
            </div>
            <div>
                {preview}
            </div>
                <button type='submit' className="createpost-btn">Post</button>           
        </form>
    </div>
        );
    }
}