
import React from 'react';
import { Grid } from '@mui/material';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

interface IProfile {

}

export const Profile = (props: IProfile) => {
    return (
        <>
            <Grid container spacing={2} sx={{ flexDirection: 'column', paddingLeft: '0px' }}>
                <ProfileInfo />
                <MyPosts />
            </Grid>
        </>
    );
};