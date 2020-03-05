import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <br />
                    <div className="kb">
                        <h1>Log Into Facebook</h1>
                    </div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>
              <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="login-submit" type="submit" value={this.props.formType} />
                        <br/>
                        <span>
                            before
                            "or"
                            after
                                                 
                            </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;