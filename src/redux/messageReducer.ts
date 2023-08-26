enum Variables {
    ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE',
    CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE'
}

export type FriendsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type MessagesStateType = {
    dialogs: FriendsType[]
    messages: MessageType[],
    newMessageText: string
}

export type AddNewMessageAT = {
    type: Variables.ADD_NEW_MESSAGE
}

export type ChangeNewMessageAT = {
    type: Variables.CHANGE_TEXT_MESSAGE
    text: string
}

type ActionsType = AddNewMessageAT | ChangeNewMessageAT;

const initialState: MessagesStateType = {
    dialogs: [
        { id: 1, name: 'Dimich' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
    ],
    newMessageText: ''
}

export const messageReducer = (state: MessagesStateType = initialState, action: ActionsType): MessagesStateType => {
    switch (action.type) {
        case (Variables.ADD_NEW_MESSAGE):
            let newMessage = state.newMessageText;
            return { ...state, messages: [...state.messages, { id: state.messages.length + 1, message: newMessage }], newMessageText: '' };
        case (Variables.CHANGE_TEXT_MESSAGE):
            return { ...state, newMessageText: action.text }
        default:
            return state;
    }
}

export const addNewMessageAC = (): AddNewMessageAT => ({ type: Variables.ADD_NEW_MESSAGE });
export const changeTextMessageAC = (text: string): ChangeNewMessageAT => ({ type: Variables.CHANGE_TEXT_MESSAGE, text });