import React from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { AppRootStateType } from '../../redux/redux-store';
import {  addNewMessageAC, changeTextMessageAC } from '../../redux/messageReducer';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { Messages } from './Messages';
import { AuthRedirect } from '../../hoc/AuthRedirect';





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
    dialogsList: React.ReactNode[]
    messagesList: React.ReactNode[]
    isLogged: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    newMessageText: state.messages.newMessageText,
    dialogsList: state.messages.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />),
    messagesList: state.messages.messages.map(m => <Message key={m.id} message={m.message} />),
    isLogged: state.auth.isLogged
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
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirect(Messages));

export default MessagesContainer;
