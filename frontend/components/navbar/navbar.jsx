import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up!</Link>
        </nav>
    );

    const personalGreeting = () => (
        <div className="header-group">
            <div className="nav">
                <Link to={`/users/${currentUser.id}`} className="header-name">{currentUser.firstName}</Link>
            </div>
            <div className="nav">
                <NavLink to="/" className="header-link">Create a Post</NavLink>
            </div>
            <div className="nav">
                <NavLink to="/" className="header-link">Home</NavLink>
            </div>
            <div className="nav">
                <NavLink to="/" className="header-link">Friends</NavLink>
            </div>
            <div className="nav">
                <button className="header-button" onClick={logout}>Log Out</button>
            </div>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Navbar;