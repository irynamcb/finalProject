import { SEARCH_USER } from "../actions/search_actions";

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);


    switch (action.type) {
        case SEARCH_USER:
        //   
            // return newState;
        default:
            return state;
    }
};


export default searchReducer;