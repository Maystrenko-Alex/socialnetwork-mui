import React from 'react';
// import styles from './MyPosts.module.css';
import { Grid, Paper, Typography } from '@mui/material';
import { Post } from './Post/Post';
import { AddNewTextForm } from './AddNewTextForm/AddNewTextForm';
import { ProfileStateType, addNewPostAC, changeNewPostTextAC } from '../../../redux/profileReducer';
import { AnyAction, Dispatch } from 'redux';

type MyPostsPropsType = {
    profileData: ProfileStateType
    dispatch: Dispatch<AnyAction>
}

export const MyPosts = ({ profileData, dispatch }: MyPostsPropsType) => {
  
    const addNewPost = () => dispatch(addNewPostAC());
    const changeTextPost = (text: string) => { 
        console.log(text) 
        dispatch(changeNewPostTextAC(text)); 
    }

    const postsList = profileData.posts.map(p => <Post key={p.id} title={p.post} likesCount={p.likesCount} />)
    return (
        <Grid item >
            <Paper sx={{ padding: '5px' }}>
                <Grid item>
                    <Typography variant='h5' ml={1}>My Posts</Typography>
                    <AddNewTextForm
                        value={profileData.newTextPost}
                        onClickHandler={addNewPost}
                        onChangeHandler={changeTextPost}
                    />
                    <div>
                        {postsList}
                    </div>
                </Grid>
            </Paper>
        </Grid>
    );
};
