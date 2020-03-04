import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import LoginForm from '../session_form/login_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log In',
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mSTP, mDTP)(LoginForm);