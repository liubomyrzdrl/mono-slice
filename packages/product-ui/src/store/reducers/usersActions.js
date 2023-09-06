import { FETCH__USERS__FAILED, FETCH__USERS__START, FETCH__USERS__SUCCESS } from "./constants";

export const fetchUsersActionStart = () => {
    return {
        type: FETCH__USERS__START
    }
};

export const fetchUsersActionSuccess = (listUsers) => {
    return {
        type: FETCH__USERS__SUCCESS,
        payload: listUsers
    }
};
export const fetchUsersActionFailed = (error) => {
    return {
        type: FETCH__USERS__FAILED,
        payload: error
    }
};
