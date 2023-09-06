const INITIAL__STATE = {
    isLoading: false,
    users: null,
    error: null,
};


export function usersReducer(state = INITIAL__STATE, action ) {
    // debugger
    switch(action.type) {
        case 'FETCH__USERS__START': return {...state, isLoading: true };
        case 'FETCH__USERS__SUCCESS': return {...state, isLoading: false, users: action.payload };
        case 'FETCH__USERS__FAILED': return {...state, isLoading: false, error: action.payload };
        default: return state.users;
    }
}