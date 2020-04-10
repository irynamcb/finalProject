import React from 'react';
import SignUpFormContainer from '../session_form/signup_form_container';
import { Redirect} from 'react-router-dom';


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
                    
                    <div className="ma3">
                        <h1>Connect with friends and the world around you on Friendsbook.</h1>
                        <div className="ess8"><h2>See photos and updates from friends in News Feed.</h2></div> 
                        <br/>
                        <div className="ess8"><h2>Share what's new in your life on your Timeline.</h2></div>
                        <br/>
                        <div className="ess8"><h2>Find more of what you're looking for with Friendsbook Search.</h2></div>
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
                <Redirect to={`/users/${this.props.currentUserId}`} />
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