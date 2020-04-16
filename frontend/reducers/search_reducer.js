import { SEARCH_USER } from "../actions/search_actions";

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);


    switch (action.type) {
        case SEARCH_USER:
     
        if (Object.keys(action.user).length === 0)  {
            return state;
        }
            return action.user.search;
        default:
            return state;
    }
};


export default searchReducer;