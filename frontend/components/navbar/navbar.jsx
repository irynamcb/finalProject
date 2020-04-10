import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    sessionLinks () {
        return (
        <nav className="login-signup">
            <Link to="/" className="home">Friendsbook</Link>
            <div className="signup-button">
                <Link to="/signup" className="signup-btn">Sign Up</Link>
            </div>
        </nav>
        )
    }

    sessionLinksLogin() {
        return (
            <nav className="login-signup">
                <Link to="/" className="home">Friendsbook</Link>
                <div className="signup-button">
                    <Link to="/login" className="signup-btn">Log In</Link>
                </div>
            </nav>
        )
    }
       
    personalGreeting() {
        return (
            <div className="navbar">
            <div className="header-group">
                <Link to="/" className="home">Friendsbook</Link>
                    <div className="header-name"><Link to='/'>{this.props.currentUser.firstName}</Link></div>
                <div className="nav">
                    <button className="header-button" onClick={this.props.logout}>Log Out</button>
                </div>
            </div>
            </div>
        )
    }
    render() {
    
        if (this.props.currentUser) {
            return this.personalGreeting();
        } else if (this.props.location.pathname === "/login") {
            return this.sessionLinks();
        } else {
            return this.sessionLinksLogin();
        }
    }
};
