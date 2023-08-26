import { combineReducers, createStore } from "redux";
import {navbarReducer} from './navbarReducer';
import { profileReducer } from "./profileReducer";
import { messageReducer } from "./messageReducer";


let rootReducer = combineReducers({
    navbar: navbarReducer,
    profile: profileReducer,
    messages: messageReducer
})

let store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>

export default store;

