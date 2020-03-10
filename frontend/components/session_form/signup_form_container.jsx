import { connect } from 'react-redux';
import React from 'react';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SignupForm from '../session_form/signup_form';
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
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default withRouter(connect(mSTP, mDTP)(SignupForm));