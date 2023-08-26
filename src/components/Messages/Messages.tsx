import React from 'react';
import { Grid, Paper } from '@mui/material';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { AppRootStateType } from '../../redux/redux-store';
import { MessagesStateType, addNewMessageAC, changeTextMessageAC } from '../../redux/messageReducer';
import { useSelector } from 'react-redux';
import { AddNewTextForm } from '../Profile/MyPosts/AddNewTextForm/AddNewTextForm';
import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
// import { MessagesNew } from './MessagesNew';

type MessagesPropsType = {

}



export const Messages: React.FC<MessagesPropsType> = () => {
    const {dialogs, messages, newMessageText} = useSelector<AppRootStateType, MessagesStateType>(state => state.messages);
    const dispatch = useDispatch<Dispatch<AnyAction>>();
  
    const dialogsList = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />);
    const messagesList = messages.map(m => <Message key={m.id} message={m.message} />);

    const addMessage = () => dispatch(addNewMessageAC());
    const changeText = (text: string) => dispatch(changeTextMessageAC(text));

    return (
        <Grid container pt={'10px'} gap={'10px'} >
            <Paper elevation={2} sx={{ display: 'flex', width: '100%' }}>
                <Grid item xs={2} p={1} sx={{ backgroundColor: 'white', borderRadius: '5px' }}>
                    {/* <MessagesNew /> */}
                    {dialogsList}
                </Grid>
                <Grid item xs={10} sx={{ backgroundColor: 'white', borderRadius: '5px', p: '5px' }}>
                    {messagesList}
                </Grid>
            </Paper>
            <Grid item xs={12}  sx={{ backgroundColor: 'white', borderRadius: '5px' }}>
                <Paper elevation={2} sx={{ display: 'flex', width: '100%'  }}>
                    <AddNewTextForm
                      value={newMessageText}
                      rows={2}
                      defaultText=' add new message...'
                      onClickHandler={addMessage}
                      onChangeHandler={changeText}
                    />
                </Paper >
            </Grid>
        </Grid>
    );
};


