import React from 'react';
import { Grid, Paper } from '@mui/material';
import { AddNewTextForm } from '../AddNewTextForm/AddNewTextForm';


type MessagesPropsType = {
    dialogsList: React.ReactNode
    messagesList: React.ReactNode
    newMessageText: string
    addMessage: () => void
    changeText: (text: string) => void
}

export const Messages: React.FC<MessagesPropsType> = ({
    dialogsList,
    messagesList,
    newMessageText,
    addMessage,
    changeText,
}) => {
    return (
        
        <Grid container pt={'10px'} gap={'10px'} >
            <Paper elevation={2} sx={{ display: 'flex', width: '100%' }}>
                <Grid item xs={2} p={1} sx={{ backgroundColor: 'white', borderRadius: '5px' }}>
                    {dialogsList}
                </Grid>
                <Grid item xs={10} sx={{ backgroundColor: 'white', borderRadius: '5px', p: '5px' }}>
                    {messagesList}
                </Grid>
            </Paper>
            <Grid item xs={12} sx={{ backgroundColor: 'white', borderRadius: '5px' }}>
                <Paper elevation={2} sx={{ display: 'flex', width: '100%' }}>
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


