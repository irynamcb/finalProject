import { connect } from 'react-redux';
import Friends from './friends';
import { withRouter } from 'react-router-dom';


const mSTP = (state, ownProps) => {

    return {
    //    friends: 
    }

};

const mDTP = dispatch => ({
   
});

export default withRouter(connect(mSTP, mDTP)(Friends));