import { combineReducers, createStore } from "redux";
import {navbarReducer} from './navbarReducer';


let rootReducer = combineReducers({
    navbar: navbarReducer
})

let store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>

export default store;

