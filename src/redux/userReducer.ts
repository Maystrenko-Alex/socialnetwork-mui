// import alexPhoto from './../assets/alexPhoto.jpg';
enum Variable {
    GET_USERS = 'GET-USERS',
    GET_USER = 'GET-USER',
    ADD_USER = 'ADD-USER',
    SET_USERS = 'SET-USERS',
    IS_LOADING = 'IS-LOADING',
    FOLLOW = "FOLLOW",
    UNFOLLOW = 'UNFOLLOW'
}
type GetUsersAT = {
    type: Variable.GET_USERS
}
type SetUsersAT = {
    type: Variable.SET_USERS
    users: UserType[]
}
type LoadingType = {
    type: Variable.IS_LOADING
    status: boolean
}
type FollowAT = {
    type: Variable.FOLLOW
    id: number
    newStatus: boolean
}
type UnfollowAT = {
    type: Variable.UNFOLLOW
    id: number
    newStatus: boolean
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
    isLoading: boolean
}
type ActionsType = GetUsersAT | SetUsersAT | LoadingType | FollowAT | UnfollowAT

const initialState: UsersStateType = {
    users: [
        // {id: 1, name: 'Alex', status: 'one status', followed: false, photos: {small: alexPhoto, large: null}},
        // {id: 1, name: 'Dmitry', status: 'second status', followed: false, photos: {small: null, large: null}},
        // {id: 1, name: 'Andrey', status: 'third status', followed: false, photos: {small: null, large: null}}
    ],
    isLoading: false
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType => {
    switch (action.type) {
        case (Variable.GET_USERS):
            return state;
        case (Variable.SET_USERS):
            return { ...state, users: [...action.users] };
        case (Variable.IS_LOADING):
            return { ...state, isLoading: action.status };
        case (Variable.UNFOLLOW):
            return { ...state, users: state.users.map(u => u.id !== action.id ? u : { ...u, followed: action.newStatus }) }
        case (Variable.FOLLOW):
            return { ...state, users: state.users.map(u => u.id !== action.id ? u : { ...u, followed: action.newStatus }) }
        default:
            return state;
    }
}

export const setUsersAC = (newUsers: Array<UserType>): SetUsersAT => ({ type: Variable.SET_USERS, users: [...newUsers] });
export const loadingAC = (loading: boolean): LoadingType => ({ type: Variable.IS_LOADING, status: loading })
export const followAC = (id: number, newStatus: boolean): FollowAT => ({ type: Variable.FOLLOW, id, newStatus })
export const unfollowAC = (id: number, newStatus: boolean): UnfollowAT => ({ type: Variable.UNFOLLOW, id, newStatus })