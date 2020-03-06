import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {


    render () {
        return (
            <div className="footer">
                <Link to="/signup" className="f">Sign Up</Link>
                <Link to="/login" className="f">Log In</Link>
                <Link to="https://www.messenger.com/" className="f">Messenger</Link>
                <Link to="https://www.facebook.com/lite/" className="f">Facebook Lite</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Watch</Link>
                <Link to="https://www.facebook.com/watch/" className="f">People</Link>
                <Link to="https://www.facebook.com/directory/pages/" className="f">Pages</Link>
                <Link to="https://www.facebook.com/pages/category/" className="f">Page Categoties</Link>
                <Link to="https://www.facebook.com/places/" className="f">Places</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Games</Link>
                <Link to="https://www.facebook.com/directory/places/" className="f">Locations</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Marketplace</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Groups</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Instagram</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Local</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Fundraisers</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Services</Link>
                <Link to="https://www.facebook.com/watch/" className="f">About</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Create Ad</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Create Page</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Developers</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Careers</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Privacy</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Cookies</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Terms</Link>
                <Link to="https://www.facebook.com/watch/" className="f">Help</Link>
                <br/>
                <br />
                <br />
                <Link to="/" className="copyright">Fcbck &#169; 2020</Link>
            </div>
        )
    }
}