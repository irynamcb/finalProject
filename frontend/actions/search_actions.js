import * as SearchAPIUtil from '../util/search_api_util';

export const SEARCH_USER = 'SEARCH_USER';

// regular actions

export const searchUser = user => ({
    type: SEARCH_USER,
    user
});

// thunk actions

export const searchUser = () => dispatch => {
    return SearchAPIUtil.search()
        .then(user => dispatch(searchUser(user)))
}