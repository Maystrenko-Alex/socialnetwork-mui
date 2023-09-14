import { combineReducers, legacy_createStore } from "redux";
import {navbarReducer} from './navbarReducer';
import { profileReducer } from "./profileReducer";
import { messageReducer } from "./messageReducer";
import { usersReducer } from "./userReducer";
import { authReducer } from "./authReducer";


let rootReducer = combineReducers({
    navbar: navbarReducer,
    profile: profileReducer,
    messages: messageReducer,
    users: usersReducer,
    auth: authReducer
})

let store = legacy_createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>

export default store;
//@ts-ignore
window.store = store;

