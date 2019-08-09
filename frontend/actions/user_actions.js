import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveUsers= (users) => {
    return {
        type: RECEIVE_USERS,
        users,
    };
};

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user,
    };
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors,
    };
};

export const requestUsers= () => {
    return (dispatch) => {
        return APIUtil.fetchUsers().then(
            (users) => dispatch(receiveUsers(users)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const requestUser = (userId) => {
    return (dispatch) => {
        return APIUtil.fetchUser(userId).then(
            (user) => dispatch(receiveUser(user)),
            response => dispatch(receiveErrors(response))
        );
    };
};