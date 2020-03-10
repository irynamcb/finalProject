import { connect } from 'react-redux';
import React from 'react';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from '../session_form/login_form';
import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';


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
                login({email: "sara@gmail.com", password: "123456"})
            )
        ),
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mSTP, mDTP)(LoginForm);