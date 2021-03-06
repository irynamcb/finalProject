import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            birthday: '',
            gender: '',

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

    componentWillUnmount() {
        this.props.clearErrors();
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

    demo() {
        event.preventDefault();
        this.props.demoLogin();
    }

    render() {

        let title;

        if (this.props.location.pathname === '/signup') {
            title = "Create A New Account"
        } else {
            title = "Sign Up"
        }

        return (
        <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div className="pvl">
                    <h1>{title}</h1>
                        <br />
                        <h2>It's quick and easy.</h2>
                    </div>
                    {this.props.errors.length > 0 ?
                        <div className="login-errors">
                            {this.renderErrors()}
                        </div>
                        : ""}
                    <div className="signup-form">
                        <br />
                        <label>
              <input type="text"
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                            className="signup-input-1"
                            placeholder="First name"
                            />
                        </label>
                        <br />

                        <label>
              <input type="text"
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                            className="signup-input-1"
                            placeholder="Last name"
                            />
                        </label>
                        <br />

                        <label>
              <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="signup-input-2"
                            placeholder="Email"
                            />
                        </label>
                        <br />
                        <label>
              <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="signup-input-2"
                            placeholder="New password"
                            />
                        </label>
                        <br />

                        <label className="birthday"><h3>Birthday</h3>
              <input type="date"
                                value={this.state.birthday}
                                onChange={this.update('birthday')}
                                className="signup-input-3"
                            />
                        </label>
                        <br />

                        <label className="gender"><h3>Gender</h3>
              <input type="radio" value="female" onChange={this.update('gender')} className="signup-input" id="female" name="gender"/>
              <label htmlFor="female" className="signup-input-4">Female</label>
              <input type="radio" value="male" onChange={this.update('gender')} className="signup-input" id="male" name="gender"/>
              <label htmlFor="male" className="signup-input-4">Male</label>
              <input type="radio" value="custom" onChange={this.update('gender')} className="signup-input" id="custom" name="gender"/>
              <label htmlFor="custom" className="signup-input-4">Custom</label>
                        </label>
                        <br />
                        <span className="info">By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</span>
                        <input className="signup-submit" type="submit" value={this.props.formType} />
                        <br/>
                        <input className="signup-submit" type="submit" value="Demo User" onClick={() => this.demo()} />
                    </div>
                </form>
            </div>
        );
    }
};

export default SignupForm;