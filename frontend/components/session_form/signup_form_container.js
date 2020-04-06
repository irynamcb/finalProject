import { connect } from 'react-redux';
import React from 'react';
import { login, signup, clearSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import {withRouter} from 'react-router-dom';


const mSTP = ({ errors, ownProps }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up'
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        demoLogin: () => (
            dispatch(
                login({ email: "brian@gmail.com", password: "123456" })
            )
        ),
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default withRouter(connect(mSTP, mDTP)(SignupForm));