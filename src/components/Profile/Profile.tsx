
import React from 'react';
import { Grid } from '@mui/material';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { ProfileStateType } from '../../redux/profileReducer';
import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

interface IProfile {

}

export const Profile = (props: IProfile) => {
    const profileData = useSelector<AppRootStateType, ProfileStateType>(store => store.profile);
    const dispatch = useDispatch<Dispatch<AnyAction>>();
    return (
        <>
            <Grid container spacing={2} sx={{ flexDirection: 'column', paddingLeft: '0px' }}>
                <ProfileInfo />
                <MyPostsContainer profileData={profileData} dispatch={dispatch} />
            </Grid>
        </>
    );
};