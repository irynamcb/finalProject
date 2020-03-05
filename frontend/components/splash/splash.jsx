import React from 'react';
import SignUpContainer from '../session_form/signup_form_container';


export default class Splash extends React.Component {
    constructor(props){
        super(props);
    }

    notLoggedInRender() {


        return (
            <div>
                <h1>Not logged In</h1>
                <div className="splash-info">
                    <h1>Connect with friends and the world around you on Facebook.</h1>
                </div>
                <SignUpContainer />
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