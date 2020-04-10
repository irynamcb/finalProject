import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {

    render () {
        return (
            <div className="footer">
                <Link to="/" className="copyright">Friendsbook &#169; 2020</Link>
            </div>
        )
    }
}