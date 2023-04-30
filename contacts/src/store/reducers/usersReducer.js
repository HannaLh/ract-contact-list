import { GET_USERS, DELETE_USER, ADD_USER, UPDATE_USER, GET_SINGLE_USER } from "../actionTypes";

const initialState = {
    users: [],
    user: {},
    loading: true,
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case DELETE_USER:
        case ADD_USER:
        case UPDATE_USER:
            return {
                ...state,
                loading: false,
            }
        case GET_SINGLE_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        default:
            return state; 
    }
};