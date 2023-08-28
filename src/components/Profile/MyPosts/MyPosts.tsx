import React, { ReactNode } from 'react';
// import styles from './MyPosts.module.css';
import { Grid, Paper, Typography } from '@mui/material';
import { AddNewTextForm } from './AddNewTextForm/AddNewTextForm';


type MyPostsPropsType = {
    newTextPost: string
    postsList: ReactNode
    addNewPost: () => void
    changeTextPost: (text: string) => void
}

 const MyPosts = ({ newTextPost, postsList, addNewPost, changeTextPost }: MyPostsPropsType) => {

    return (
        <Grid item >
            <Paper sx={{ padding: '5px' }}>
                <Grid item>
                    <Typography variant='h5' ml={1}>My Posts</Typography>
                    <AddNewTextForm
                        value={newTextPost}
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
export default React.memo(MyPosts);