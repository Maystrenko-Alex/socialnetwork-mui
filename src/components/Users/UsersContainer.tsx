import React from 'react';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { UserType, UsersStateType, followAC, loadingAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unFollowAC } from '../../redux/userReducer';
// import { AnyAction, Dispatch } from 'redux';
import { Users } from './Users';
import { usersAPI } from '../../api/api';


type UsersContainerPropsType = {
    usersData: UsersStateType
    followAC: (id: number) => void
    unFollowAC: (id: number) => void
    loadingAC: (status: boolean) => void
    setUsersAC: (users: UserType[]) => void
    setUsersTotalCountAC: (totalCount: number) => void
    setCurrentPageAC: (nextPage: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    getUsers(page: number) {
        this.props.loadingAC(true);
        usersAPI.getUsers(page, this.props.usersData.pageSize)
            .then((response: any) => {
                this.props.setUsersAC(response.items);
                console.log(response)
                this.props.setUsersTotalCountAC(response.totalCount);
            })
            .then(() => this.props.loadingAC(false))
    }
    componentDidMount(): void {
        this.getUsers(this.props.usersData.currentPage);
    }

    changePage = (e: React.ChangeEvent<unknown>, value: number): void => {
        this.props.setCurrentPageAC(value);
        this.getUsers(value);
    }

    render() {
        return <Users
            usersData={this.props.usersData}
            follow={this.props.followAC}
            unFollow={this.props.unFollowAC}
            loading={this.props.loadingAC}
            onChangeHandler={this.changePage}
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
// type mapDispatchToPropsType = {
//     follow: (id: number, newStatus: boolean) => void
//     unFollow: (id: number, newStatus: boolean) => void
//     loading: (status: boolean) => void
//     setUsers: (users: UserType[]) => void
//     setUsersTotalCount: (totalCount: number) => void
//     setCurrentPage: (nextPage: number) => void
// }
// function mapDispatchToProps(dispatch: Dispatch<AnyAction>): mapDispatchToPropsType {
//     return {
//         follow: (id: number, newStatus: boolean) => dispatch(followAC(id, newStatus)),
//         unFollow: (id: number, newStatus: boolean) => dispatch(unFollowAC(id, newStatus)),
//         loading: (status: boolean) => dispatch(loadingAC(status)),
//         setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
//         setUsersTotalCount: (totalCount: number) => dispatch(setUsersTotalCountAC(totalCount)),
//         setCurrentPage: (nextPage: number) => dispatch(setCurrentPageAC(nextPage))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
export default connect(mapStateToProps,
    { followAC, unFollowAC, loadingAC, setUsersAC, setUsersTotalCountAC, setCurrentPageAC })(UsersContainer)