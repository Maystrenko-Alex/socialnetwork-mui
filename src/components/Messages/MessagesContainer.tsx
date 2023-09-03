import React from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { AppRootStateType } from '../../redux/redux-store';
import {  addNewMessageAC, changeTextMessageAC } from '../../redux/messageReducer';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { Messages } from './Messages';





// export const MessagesContainer: React.FC<MessagesContainerPropsType> = () => {

//     const { dialogs, messages, newMessageText } = useSelector<AppRootStateType, MessagesStateType>(state => state.messages);
//     const dispatch = useDispatch<Dispatch<AnyAction>>();

//     const dialogsList = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} /> );
//     const messagesList = messages.map(m => <Message key={m.id} message={m.message} />);

//     const addMessage = () => dispatch(addNewMessageAC());
//     const changeText = (text: string) => dispatch(changeTextMessageAC(text));

//     return (
//         <Messages
//             newMessageText={newMessageText}
//             dialogsList={dialogsList}
//             messagesList={messagesList}
//             addMessage={addMessage}
//             changeText={changeText}
//         />
//     );
// };

type MapStateToPropsType = {
    newMessageText: string
    dialogsList: React.ReactNode
    messagesList: React.ReactNode

}
const mapStateToProps = (store: AppRootStateType): MapStateToPropsType => ({
    newMessageText: store.messages.newMessageText,
    dialogsList: store.messages.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />),
    messagesList: store.messages.messages.map(m => <Message key={m.id} message={m.message} />)
}
)
type MapDispatchToPropsType = {
    addMessage: () => void
    changeText: (text: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): MapDispatchToPropsType => ({
    addMessage: () => dispatch(addNewMessageAC()),
    changeText: (text: string) => dispatch(changeTextMessageAC(text))
})
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
