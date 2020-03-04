import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
     <div>
        
     </div>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">{currentUser.firstName}</h2> 
            {/* should be a link to a personal profile page */}
            <h2>Create a Post</h2>
            <h2>Home</h2>
            {/* goes to currentUser's wall */}
            <h2>Friends</h2>
            {/* goes to currentUser friends page */}
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Navbar;