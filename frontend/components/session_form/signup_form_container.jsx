import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignupForm from '../session_form/signup_form';


const mSTP = ({ errors, ownProps }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        title: 'Create a New Account'
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mSTP, mDTP)(SignupForm);