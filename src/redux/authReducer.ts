import { Dispatch } from "redux"
import { authApi } from "../api/api"

enum Variable {
    SET_USER_DATA = 'SET_USER_DATA',
    IS_LOGGED = 'IS_LOGGED'
}
export type UserDataType = {
    id: string
    email: string
    login: string
}
type SetUserDataAT = {
    type: Variable.SET_USER_DATA
    data: UserDataType
}

type ActionTypes = SetUserDataAT

export type AuthStateType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isLogged: boolean
}
const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isLogged: false
}

export const authReducer = (state: AuthStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case (Variable.SET_USER_DATA):
            return { ...state, ...action.data, isLogged: true }
        default:
            return state;

    }
}

export const setAuthUserDataAC = (data: UserDataType): SetUserDataAT => ({ type: Variable.SET_USER_DATA, data });

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authApi.me().then(res => {
                if (res.resultCode === 0)
                dispatch(setAuthUserDataAC(res.data))
            })
}