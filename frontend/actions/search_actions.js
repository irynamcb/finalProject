import * as SearchAPIUtil from '../util/search_api_util';

export const SEARCH_USER = 'SEARCH_USER';
export const CLEAR_SEARCH_LIST = 'CLEAR_SEARCH_LIST';

// regular actions
export const searchUser = user => ({
    type: SEARCH_USER,
    user
});

export const clearSearList = () => ({
    type: CLEAR_SEARCH_LIST  
});

// thunk actions
export const search = (key) => dispatch => {
    return SearchAPIUtil.search(key)
        .then(user => dispatch(searchUser(user)))
}

export const clear = () => dispatch => {
    return dispatch(clearSearList())
}