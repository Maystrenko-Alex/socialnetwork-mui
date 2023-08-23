import React from 'react';
// import styles from './MyPosts.module.css';
import { Grid, Paper, Typography } from '@mui/material';
import { Post } from './Post/Post';
import { AddNewTextForm } from './AddNewTextForm/AddNewTextForm';

type MyPostsPropsType = {

}

export const MyPosts = (props: MyPostsPropsType) => {

    return (
        <Grid item >
            <Paper sx={{padding: '5px'}}>
                <Grid item>
                    <Typography variant='h5' ml={1}>My Posts</Typography>
                    <AddNewTextForm />
                    <div>
                        <Post title='post 1 post 1 post 1 post 1 post 1 post 1 ' likesCount={1}/>
                        <Post title='post 2'likesCount={23}/>
                        <Post title='post 3'likesCount={0}/>
                    </div>
                </Grid>
            </Paper>
        </Grid>
    );
};
