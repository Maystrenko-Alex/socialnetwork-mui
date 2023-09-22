import { AnyAction, Dispatch } from "redux"
import { usersAPI } from "../api/api"

// import alexPhoto from './../assets/alexPhoto.jpg';
enum Variable {
    SET_USERS = 'SET_USERS',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    IS_LOADING = 'IS_LOADING',
    FOLLOW = "FOLLOW",
    UNFOLLOW = 'UNFOLLOW',
    TOGGLE_IS_FOLLOWIG_PROGRESS = 'TOGGLE_IS_FOLLOWIG_PROGRESS'
}
type SetUsersAT = {
    type: Variable.SET_USERS
    users: UserType[]
}
type SetUsersTotalCountAT = {
    type: Variable.SET_TOTAL_USERS_COUNT
    totalCount: number
}
type SetCurrentPageAT = {
    type: Variable.SET_CURRENT_PAGE
    nextPage: number
}

type LoadingAT = {
    type: Variable.IS_LOADING
    status: boolean
}
type FollowAT = {
    type: Variable.FOLLOW
    id: number
}
type UnfollowAT = {
    type: Variable.UNFOLLOW
    id: number
}
type ToggleIsFollowingProgressAT = {
    type: Variable.TOGGLE_IS_FOLLOWIG_PROGRESS
    isFetching: boolean
    userId: number
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string | null
        large: string | null
    },
    followed: boolean,
    uniqueUrlName?: string | null
}
export type UsersStateType = {
    users: UserType[],
    isLoading: boolean,
    totalCount: number,
    pageSize: number,
    currentPage: number,
    followingInProgress: Array<number>,
    isFetching: boolean
}
type ActionsType = SetUsersAT | SetUsersTotalCountAT | SetCurrentPageAT | LoadingAT | FollowAT | UnfollowAT | ToggleIsFollowingProgressAT;

const initialState: UsersStateType = {
    users: [],
    isLoading: false,
    totalCount: 0,
    pageSize: 16,
    currentPage: 1,
    followingInProgress: [],
    isFetching: false
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType => {
    switch (action.type) {
        case (Variable.SET_USERS):
            return { ...state, users: [...action.users] };
        case (Variable.SET_TOTAL_USERS_COUNT):
            return { ...state, totalCount: action.totalCount };
        case (Variable.SET_CURRENT_PAGE):
            return { ...state, currentPage: action.nextPage };
        case (Variable.IS_LOADING):
            return { ...state, isLoading: action.status };
        case (Variable.FOLLOW):
            return { ...state, users: state.users.map(u => u.id === action.id ? { ...u, followed: true } : u) };
        case (Variable.UNFOLLOW):
            return { ...state, users: state.users.map(u => u.id === action.id ? { ...u, followed: false } : u) };
        case (Variable.TOGGLE_IS_FOLLOWIG_PROGRESS):
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const setUsersAC = (newUsers: Array<UserType>): SetUsersAT => ({ type: Variable.SET_USERS, users: [...newUsers] });
export const setUsersTotalCountAC = (totalCount: number): SetUsersTotalCountAT => ({ type: Variable.SET_TOTAL_USERS_COUNT, totalCount });
export const setCurrentPageAC = (nextPage: number): SetCurrentPageAT => ({ type: Variable.SET_CURRENT_PAGE, nextPage });
export const loadingAC = (loading: boolean): LoadingAT => ({ type: Variable.IS_LOADING, status: loading })
export const followAC = (id: number): FollowAT => ({ type: Variable.FOLLOW, id });
export const unFollowAC = (id: number): UnfollowAT => ({ type: Variable.UNFOLLOW, id });
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): ToggleIsFollowingProgressAT => ({ type: Variable.TOGGLE_IS_FOLLOWIG_PROGRESS, isFetching, userId });

export const getUsersThunk = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(loadingAC(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then((response: any) => {
            dispatch(setUsersAC(response.items));
            dispatch(setUsersTotalCountAC(response.totalCount));
            dispatch(loadingAC(false));
        })
}

export const followThunk = (userId: number) => (dispatch: Dispatch<AnyAction>) => {
    usersAPI.follow(userId).then(res => {
        if (res.resultCode === 0) {
            dispatch(followAC(userId))
        } else { console.error(res.messages[0]) }
    }
    ).finally(() => {
        setTimeout(() => { dispatch(toggleIsFollowingProgress(false, userId)) }, 1000)
    })
}

export const unfollowThunk = (userId: number) => (dispatch: Dispatch<AnyAction>) => {
    usersAPI.unfollow(userId).then(res => {
        if (res.resultCode === 0) {
            dispatch(unFollowAC(userId))
        } else { console.error(res.messages[0]) }
    }
    ).finally(() => {
        setTimeout(() => { dispatch(toggleIsFollowingProgress(false, userId)) }, 1000)
    })
}