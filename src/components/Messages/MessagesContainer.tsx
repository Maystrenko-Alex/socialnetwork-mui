import React from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { AppRootStateType } from '../../redux/redux-store';
import { MessagesStateType, addNewMessageAC, changeTextMessageAC } from '../../redux/messageReducer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { Messages } from './Messages';

type MessagesContainerPropsType = {

}



export const MessagesContainer: React.FC<MessagesContainerPropsType> = () => {
    
    const { dialogs, messages, newMessageText } = useSelector<AppRootStateType, MessagesStateType>(state => state.messages);
    const dispatch = useDispatch<Dispatch<AnyAction>>();

    const dialogsList = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} /> );
    const messagesList = messages.map(m => <Message key={m.id} message={m.message} />);

    const addMessage = () => dispatch(addNewMessageAC());
    const changeText = (text: string) => dispatch(changeTextMessageAC(text));

    return (
        <Messages
            newMessageText={newMessageText}
            dialogsList={dialogsList}
            messagesList={messagesList}
            addMessage={addMessage}
            changeText={changeText}
        />
    );
};


