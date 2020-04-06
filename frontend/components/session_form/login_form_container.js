import { connect } from 'react-redux';
import React from 'react';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
 

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log In',
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        demoLogin: () => (
            dispatch(
                login({email: "brian@gmail.com", password: "123456"})
            )
        ),
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mSTP, mDTP)(LoginForm);