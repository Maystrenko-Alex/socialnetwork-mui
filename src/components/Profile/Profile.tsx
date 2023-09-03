
import React from 'react';
import { Grid } from '@mui/material';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

import MyPostsContainer from './MyPosts/MyPostsContainer';

interface IProfile {

}

export const Profile = (props: IProfile) => {
    return (
        <>
            <Grid container spacing={2} sx={{ flexDirection: 'column', paddingLeft: '0px' }}>
                <ProfileInfo />
                <MyPostsContainer />
            </Grid>
        </>
    );
};