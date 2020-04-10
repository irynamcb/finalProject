import {connect} from 'react-redux';
import Splash from './splash';

const mSTP = (state) => {
    let loggedIn = state.session.id !== null 
        return {
            loggedIn: loggedIn,
            currentUserId: state.session.id
        }
}

export default connect(mSTP)(Splash);