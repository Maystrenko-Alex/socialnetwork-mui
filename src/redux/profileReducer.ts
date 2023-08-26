import { v1 } from "uuid"
enum Variables {
    ADD_POST = 'ADD-POST',
    CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'
}

export type ProfileStateType = {
    posts: PostType[]
    newTextPost: string
}
export type PostType = {
    id: string
    post: string
    likesCount: number
}
type AddNewPostTypeAT = {
    type: Variables.ADD_POST
}
type ChangeNewPostTextAT = {
    type: Variables.CHANGE_NEW_POST_TEXT
    text: string
}
type ActionsType = AddNewPostTypeAT | ChangeNewPostTextAT;

const initialState: ProfileStateType = {
    posts: [
        { id: v1(), post: 'Hi, how are you?', likesCount: 1 },
        { id: v1(), post: `It's my first post!`, likesCount: 23 },
        { id: v1(), post: 'Hello)', likesCount: 0 },
    ],
    newTextPost: ''
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
        default:
            return state;
    }
}

export const addNewPostAC = (): AddNewPostTypeAT => ({ type: Variables.ADD_POST })
export const changeNewPostTextAC = (text: string): ChangeNewPostTextAT => ({
    type: Variables.CHANGE_NEW_POST_TEXT, text
})