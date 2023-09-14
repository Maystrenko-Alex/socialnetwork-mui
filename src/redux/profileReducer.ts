import { v1 } from "uuid"
enum Variables {
    ADD_POST = 'ADD-POST',
    CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

export type ProfileStateType = {
    posts: PostType[]
    profile: ProfileType
    newTextPost: string
    isLoading: boolean
}
export type PostType = {
    id: string
    post: string
    likesCount: number
}
export type ProfileType = {
    userId: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    photos: {
        small: string
        large: string
    }

}
type AddNewPostTypeAT = {
    type: Variables.ADD_POST
}
type ChangeNewPostTextAT = {
    type: Variables.CHANGE_NEW_POST_TEXT
    text: string
}
type SetUserProfileAT = {
    type: Variables.SET_USER_PROFILE
    profile: ProfileType
}
type SetIsLoadingAT = {
    type: Variables.SET_IS_LOADING
    isLoading: boolean
}
type ActionsType = AddNewPostTypeAT | ChangeNewPostTextAT | SetUserProfileAT | SetIsLoadingAT;

const initialState: ProfileStateType = {
    posts: [
        { id: v1(), post: 'Hi, how are you?', likesCount: 1 },
        { id: v1(), post: `It's my first post!`, likesCount: 23 },
        { id: v1(), post: 'Hello)', likesCount: 0 },
    ],
    profile: {} as ProfileType,
    newTextPost: '',
    isLoading: false
}
export const profileReducer = (
    state: ProfileStateType = initialState,
    action: ActionsType
): ProfileStateType => {
    switch (action.type) {
        case (Variables.ADD_POST):
            return { ...state, posts: [...state.posts, { id: v1(), post: state.newTextPost, likesCount: 0 }] };
        case (Variables.CHANGE_NEW_POST_TEXT):
            return { ...state, newTextPost: action.text };
        case (Variables.SET_USER_PROFILE):
            return { ...state, profile: action.profile };
        case (Variables.SET_IS_LOADING):
            return { ...state, isLoading: action.isLoading };
        default:
            return state;
    }
}

export const addNewPostAC = (): AddNewPostTypeAT => ({ type: Variables.ADD_POST })
export const changeNewPostTextAC = (text: string): ChangeNewPostTextAT => ({ type: Variables.CHANGE_NEW_POST_TEXT, text });
export const setUserProfileAC = (profile: ProfileType): SetUserProfileAT => ({ type: Variables.SET_USER_PROFILE, profile });
export const setIsLoadingAC = (isLoading: boolean): SetIsLoadingAT => ({ type: Variables.SET_IS_LOADING, isLoading });