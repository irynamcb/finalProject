import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {


    render () {
        return (
            <div className="footer">
                <Link to="/signup" className="f">Sign Up</Link>
                <Link to="/login" className="f">Log In</Link>
                <Link to="/" className="f">Messenger</Link>
                <Link to="/" className="f">Facebook Lite</Link>
                <Link to="/" className="f">Watch</Link>
                <Link to="/" className="f">People</Link>
                <Link to="/" className="f">Pages</Link>
                <Link to="/" className="f">Page Categoties</Link>
                <Link to="/" className="f">Places</Link>
                <Link to="/" className="f">Games</Link>
                <Link to="/" className="f">Locations</Link>
                <Link to="/" className="f">Marketplace</Link>
                <Link to="/" className="f">Groups</Link>
                <Link to="/" className="f">Instagram</Link>
                <Link to="/" className="f">Local</Link>
                <Link to="/" className="f">Fundraisers</Link>
                <Link to="/" className="f">Services</Link>
                <Link to="/" className="f">About</Link>
                <Link to="/" className="f">Create Ad</Link>
                <Link to="/" className="f">Create Page</Link>
                <Link to="/" className="f">Developers</Link>
                <Link to="/" className="f">Careers</Link>
                <Link to="/" className="f">Privacy</Link>
                <Link to="/" className="f">Cookies</Link>
                <Link to="/" className="f">Terms</Link>
                <Link to="/" className="f">Help</Link>
                <br/>
                <br />
                <br />
                <Link to="/" className="copyright">FriendsBook &#169; 2020</Link>
            </div>
        )
    }
}