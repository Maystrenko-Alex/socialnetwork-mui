import React, { Component } from 'react';
import { Profile } from './Profile';
import { ProfileType, getUserProfileThunk } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { Navigate } from 'react-router-dom';


type ProfileContainerPropsType = {
    profile: ProfileType
    pathID: string
    isLoading: boolean
    isLogged: boolean
    getUserProfileThunk: (userId: number) => void
}
class ProfileContainer extends Component<ProfileContainerPropsType> {

    componentDidMount(): void {
        
        let pathUserId = this.props.pathID.split('/')[2];
        let currentUserID = (pathUserId === undefined) ? '22229' : pathUserId;
        
        this.props.getUserProfileThunk(Number(currentUserID));
    }

    render() {
        return (
            !this.props.isLogged
            ? <Navigate to={'/login'} />
            : <Profile profile={this.props.profile} isLoading={this.props.isLoading} />
        )
    }
};


type MapStateToPropsType = {
    profile: ProfileType
    pathID: string
    isLoading: boolean
    isLogged: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profile.profile,
    pathID: window.location.pathname,
    isLoading: state.profile.isLoading,
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps, { getUserProfileThunk })(ProfileContainer);