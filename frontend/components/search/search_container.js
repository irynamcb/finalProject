import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import {search, clear} from '../../actions/search_actions';
import Search from './search';


const mSTP = (state, ownProps) => {
    let users = Object.values(state.entities.search);
    return {
        users: users
    }
}

const mDTP = dispatch => ({
    search: key => dispatch(search(key)),
    clear: () => dispatch(clear())
})

export default withRouter(connect(mSTP, mDTP)(Search));