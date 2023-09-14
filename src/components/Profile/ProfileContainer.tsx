import React, { Component } from 'react';
import { Profile } from './Profile';
import axios from 'axios';
import { ProfileType, setIsLoadingAC, setUserProfileAC } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';


type ProfileContainerPropsType = {
    profile: ProfileType
    setUserProfileAC: (profile: ProfileType) => void
    setIsLoadingAC: (isLoading: boolean) => void
    pathID: string
    isLoading: boolean
}
class ProfileContainer extends Component<ProfileContainerPropsType> {

    componentDidMount(): void {
        let pathUserId = this.props.pathID.split('/')[2];

        let currentUserID = (pathUserId === ':userId') ? '22229' : pathUserId;

        this.props.setIsLoadingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${currentUserID}`)
            .then(res => this.props.setUserProfileAC(res.data))
            .then(() => this.props.setIsLoadingAC(false))
    }

    render() {
        return <Profile profile={this.props.profile} isLoading={this.props.isLoading} />
    }
};


type MapStateToPropsType = {
    profile: ProfileType
    pathID: string
    isLoading: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profile.profile,
    pathID: window.location.pathname,
    isLoading: state.profile.isLoading
})

export default connect(mapStateToProps, { setUserProfileAC, setIsLoadingAC })(ProfileContainer);