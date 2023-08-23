
import { Grid, Paper, styled } from '@mui/material';
import amber from '@mui/material/colors/amber';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { MessagesNew } from './MessagesNew';

type MessagesPropsType = {

}

type FriendsType = {
    id: number
    name: string
}
export const Messages: React.FC<MessagesPropsType> = () => {
    const friends: FriendsType[] = [
        { id: 1, name: 'Dimich' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
    ]
    const messages = [
        'Hi', 'How is your it-kamasutra?', 'Yo'
    ]
    const friendsItems = friends.map(f => <DialogItem key={f.id} id={f.id} name={f.name} />);
    const messagesList = messages.map((mes, index) => <Message key={index} message={mes} />)
    return (
        <Grid container pt={'10px'} >
            <Paper elevation={3} sx={{display: 'flex', width: '100%'}}>
                <Grid item xs={2} p={1} sx={{ backgroundColor: 'white', borderRadius: '5px' }}>
                    {/* <MessagesNew /> */}
                    {friendsItems}
                </Grid>
                <Grid item xs={10} sx={{ backgroundColor: 'white', borderRadius: '5px', p: '5px' }}>
                    {messagesList}
                </Grid>
            </Paper>
        </Grid>
    );
};

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: 'black',
    // color: theme.palette.text.secondary,
    '&.active': {
        color: amber[800]
    }
}))

const DialogItem: React.FC<FriendsType> = ({ id, name }) => {
    return (
        <div>
            <StyledNavLink
            className={({isActive}) => (isActive ? 'active' : '')}
                to={'/messages/' + id}
            >
                {name}
            </StyledNavLink>
        </div>
    );
}

const Message: React.FC<{ message: string }> = ({ message }) => {
    return (
        <div>{message}</div>
    );
}