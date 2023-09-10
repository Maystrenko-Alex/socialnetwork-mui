import React, { Component } from 'react';
import { Profile } from './Profile';
import axios from 'axios';
import { ProfileType, setUserProfileAC } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';

import { CircularProgress } from '@mui/material';
type ProfileContainerPropsType = {
    profile: ProfileType
    setUserProfileAC: (profile: ProfileType) => void
    pathID: string
}
class ProfileContainer extends Component<ProfileContainerPropsType> {

    componentDidMount(): void {
        let currentUserID = '22229';

        if (!this.props.pathID.lastIndexOf('/profile/')) {
            console.log(this.props.pathID.slice(9))
            currentUserID = this.props.pathID.slice(9) === ':userId' ? '22229' : this.props.pathID.slice(9);
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${currentUserID}`, {
            withCredentials: true
        })
            .then(res => {
                console.log(res.data)
                this.props.setUserProfileAC(res.data)
            })
    }

    render() {

        return (
            <>
                {
                    Object.keys(this.props.profile).length === 0
                    ? <CircularProgress />
                        : <Profile profile={this.props.profile} />
                }
            </>
        )
    }
};
type MapStateToPropsType = {
    profile: ProfileType
    pathID: string
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profile.profile,
    pathID: window.location.pathname
})

export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer);