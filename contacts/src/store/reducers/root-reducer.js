import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
    dataUsers: usersReducer,
});

export default rootReducer;