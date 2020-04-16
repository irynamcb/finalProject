import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import {search} from '../../actions/search_actions';
import Search from './search';


const mSTP = (state, ownProps) => {


    return {
        
    }
}

const mDTP = dispatch => ({
    search: key => dispatch(search(key)),
})

export default withRouter(connect(mSTP, mDTP)(Search));