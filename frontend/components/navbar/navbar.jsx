import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
     <div>
        
     </div>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">{currentUser.firstName}</h2> 
            <NavLink to="/" className="header-link">Create a Post</NavLink>
            <br/>
            <NavLink to="/" className="header-link">Home</NavLink>
            <br />
            <NavLink to="/" className="header-link">Friends</NavLink>
            <br />
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Navbar;