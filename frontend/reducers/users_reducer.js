import {
    RECEIVE_CURRENT_USER,
} from "../actions/session_actions";
import {
    RECEIVE_USER,
} from "../actions/user_actions";
import { merge } from "lodash";
import { RECEIVE_PROJECT } from "../actions/project_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let newState = merge({}, state, { [action.user.id]: action.user })

            return newState;
        case RECEIVE_USER:
            newState = merge({}, state, { [action.user.id]: action.user })

            return newState;

        case RECEIVE_PROJECT:
            newState = merge({}, state, { [action.creator.id]: action.creator })

            return newState;
         
        default:
            return state;
    }
};

export default usersReducer;