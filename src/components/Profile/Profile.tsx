
import { CircularProgress, Grid } from '@mui/material';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../redux/profileReducer';
import { Component } from 'react';

interface IProfile {
    profile: ProfileType
    isLoading: boolean
}

export class Profile extends Component<IProfile>  {
    
    render() {

        return (
            <>
                {this.props.isLoading
                    ? (<Grid container sx={{justifyContent: 'center'}}>
                        <CircularProgress />
                    </Grid>
                    )
                    : (
                        <Grid container spacing={2} sx={{ flexDirection: 'column', paddingLeft: '0px' }}>
                            <ProfileInfo profile={this.props.profile} />
                            <MyPostsContainer />
                        </Grid>)
                }
            </>
        );
    }
};