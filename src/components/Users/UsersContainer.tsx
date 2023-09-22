import React from 'react';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import {
    UsersStateType, followThunk, getUsersThunk, loadingAC, setCurrentPageAC,
    toggleIsFollowingProgress, unfollowThunk
} from '../../redux/userReducer';
import { Users } from './Users';


type UsersContainerPropsType = {
    usersData: UsersStateType
    loadingAC: (status: boolean) => void
    setCurrentPageAC: (nextPage: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount(): void {
        this.props.getUsersThunk(this.props.usersData.currentPage, this.props.usersData.pageSize)
    }

    changePage = (e: React.ChangeEvent<unknown>, value: number): void => {
        this.props.setCurrentPageAC(value);
        this.props.getUsersThunk(value, this.props.usersData.pageSize)
    }

    render() {
        return <Users
            usersData={this.props.usersData}
            loading={this.props.loadingAC}
            onChangeHandler={this.changePage}
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            followThunk={this.props.followThunk}
            unfollowThunk={this.props.unfollowThunk}
        />;
    }
}

type MapStateToPropsType = {
    usersData: UsersStateType
}
function mapStateToProps(state: AppRootStateType): MapStateToPropsType {
    return {
        usersData: state.users
    }
}

export default connect(mapStateToProps,
    { loadingAC, getUsersThunk, followThunk, unfollowThunk, setCurrentPageAC, toggleIsFollowingProgress })(UsersContainer)