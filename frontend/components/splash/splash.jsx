import React from 'react';
import SignUpFormContainer from '../session_form/signup_form_container';
import { faFileAlt, faStarHalf, faCaretSquareUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class Splash extends React.Component {
    constructor(props){
        super(props);
    }

    notLoggedInRender() {

        let iconStyle = {
            width: '56px',
            height: '56px',
            color: 'purple',
            marginRight: '16px'
        }

        return (
            <div className="d">    
                <div className="splash-info">
                    <h1>Not logged In</h1>
                    <div className="ma3">
                        <h1 className="ma3">Connect with friends and the world around you on Facebook.</h1>
                    </div>
                    <div>
                        <h2 className="ess8" ><FontAwesomeIcon icon={faFileAlt} style={iconStyle} /> See photos and updates from friends in News Feed. </h2>
                        <br/>
                        <h2 className="ess8"><FontAwesomeIcon icon={faStarHalf} style={iconStyle} /> Share what's new in your life on your Timeline.</h2>
                        <br/>
                        <h2 className="ess8"><FontAwesomeIcon icon={faCaretSquareUp} style={iconStyle} /> Find more of what you're looking for with Facebook Search.</h2>
                        <br/>
                    </div>
                </div>
                <div className="e">
                    <SignUpFormContainer/>
                </div>
            </div>
        ) 
    }

    loggedInRender () {



        return(
            <div>
                <h1>Logged In</h1>
            </div>
        )
    }

    render () {

        if (this.props.loggedIn) {
            return this.loggedInRender()
        } else {
            return this.notLoggedInRender()
        }

    }
}