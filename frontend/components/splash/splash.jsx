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
            width: '46px',
            height: '46px',
            color: '#666',
            marginRight: '16px'
        }

        return (
            <div className="d">    
                <div className="splash-info">
                    {/* <img src={window.homepage} alt=""/> */}
                    <h1></h1> 
                    
                    <div className="ma3">
                        <h1 className="ma3">Connect with friends and the world around you on Friendsbook.</h1>
                    </div>
                    <div>
                        <div className="ess8" ><FontAwesomeIcon icon={faFileAlt} style={iconStyle}/> <h2>See photos and updates</h2><h3>from friends in News Feed.</h3></div> 
                        <br/>
                        <div className="ess8"><FontAwesomeIcon icon={faStarHalf} style={iconStyle}/> <h2>Share what's new </h2><h3>in your life on your Timeline.</h3></div>
                        <br/>
                        <div className="ess8"><FontAwesomeIcon icon={faCaretSquareUp} style={iconStyle}/> <h2>Find more</h2><h3>of what you're looking for with Friendsbook Search.</h3></div>
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
                <h1></h1>
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