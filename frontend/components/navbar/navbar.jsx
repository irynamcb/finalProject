import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { faFacebookF, faClock, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchContainer from '../search/search_container';


export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    sessionLinks () {
        return (
        <div className="navbar">
        <nav className="login-signup">
                <Link to="/" className="home">Friendsbook</Link>
            <div className="nav-content">
            <div className="signup-button">
                <Link to="/signup" className="signup-btn">Sign Up</Link>
            </div>
            </div>
        </nav>
        </div>
        )
    }

    sessionLinksLogin() {
        return (
            <div className="navbar">
            <nav className="login-signup">
                <Link to="/" className="home">Friendsbook</Link>
                <div className="nav-content">
                <div className="signup-button">
                    <Link to="/login" className="signup-btn">Log In</Link>
                </div>
                </div>
            </nav>
            </div>
        )
    }
       
    personalGreeting() {
        
        return (
            <div className="navbar">
            <div className="header-group">
                    <Link to="/" className="home">Friendsbook</Link>
                    <SearchContainer />
                    <div className="nav-content">
                    <div id="wrapper-navbar"><img src={this.props.currentUser.avatarUrl} /></div>
                    <div className="header-name"><Link to='/'>{this.props.currentUser.firstName}</Link></div>
                <div className="nav">
                    <button className="header-button" onClick={this.props.logout}>Log Out</button>
                </div>
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
