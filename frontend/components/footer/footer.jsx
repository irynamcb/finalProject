import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {

    render () {
        return (
            <div className="footer">
                <div className="copyright">
                <Link to="/">Friendsbook &#169; 2020</Link>
                </div>
            </div>
        )
    }
}