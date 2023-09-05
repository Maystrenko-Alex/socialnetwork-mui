
import React from 'react';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { UserType, UsersStateType, followAC, loadingAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC } from '../../redux/userReducer';
import axios, { AxiosResponse } from 'axios';
import { User } from './User/User';
import { AnyAction, Dispatch } from 'redux';
import { Grid, CircularProgress, Pagination } from '@mui/material';

type UsersContainerPropsType = {
    usersData: UsersStateType
    follow: (id: number, newStatus: boolean) => void
    unFollow: (id: number, newStatus: boolean) => void
    loading: (status: boolean) => void
    setUsers: (users: UserType[]) => void
    setUsersTotalCount: (totalCount: number) => void
    setCurrentPage: (nextPage: number) => void
}
// export const UsersContainer: FC<UsersContainerPropsType> = () => {
//     const users = useSelector<AppRootStateType, UsersStateType>(state => state.users);
//     const dispatch = useDispatch();


//     const usersList = users.users.map(u => {
//         const followHandler = () => {
//             u.followed
//                 ? dispatch(unfollowAC(u.id, !u.followed))
//                 : dispatch(unfollowAC(u.id, !u.followed))
//         }
//         return <User1 key={u.id} user={u} followHandler={followHandler} />
//     })

//     useEffect(() => {
//         if (users.users.length === 0) {
//             dispatch(loadingAC(true));
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: AxiosResponse) => dispatch(setUsersAC(response.data.items)))
//                 .then(() => dispatch(loadingAC(false)))
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])
//     const isLoading = users.isLoading;
//     return <UsersC isLoading={users.isLoading} usersList={usersList} />; 
// return (
//     <>
//         <Grid container flexDirection={'column'}>
//             {
//                 isLoading
//                     ? <CircularProgress />
//                     : usersList
//             }
//         </Grid>
//     </>
// );
// };

class UsersContainer extends React.Component<UsersContainerPropsType> {
    getUsers(page: number) {
        this.props.loading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersData.pageSize}`, {
            withCredentials: true
        })
        .then((response: AxiosResponse) => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount)
        })
        .then(() => this.props.loading(false))
    }
    componentDidMount(): void {
        this.getUsers(this.props.usersData.currentPage)
        
    }
    
    onChangeHandler = (e: React.ChangeEvent<unknown>, value: number): void => {
        this.props.setCurrentPage(value)
        this.getUsers(value)
    }
    render() {
        const pages = Math.round(this.props.usersData.totalCount / this.props.usersData.pageSize);
        
        const usersList = this.props.usersData.users.map(u => {
            const followHandler = () => {
                u.followed
                    ? this.props.unFollow(u.id, !u.followed)
                    : this.props.follow(u.id, !u.followed)
            }
            return (
                <Grid item xs={5} key={u.id}>
                    <User user={u} followHandler={followHandler.bind(this)} />
                </Grid>
            );
        })
        return (
            <div>
                <Grid container flexDirection={'row'}>
                    {
                        this.props.usersData.isLoading
                            ? <CircularProgress />
                            : usersList
                    }
                </Grid>
                <Pagination
                    page={this.props.usersData.currentPage}
                    count={pages}
                    variant="outlined"
                    color="secondary"
                    sx={{ justifySelf: 'center' }}
                    onChange={this.onChangeHandler}
                />

            </div>
        );
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

type mapDispatchToPropsType = {
    follow: (id: number, newStatus: boolean) => void
    unFollow: (id: number, newStatus: boolean) => void
    loading: (status: boolean) => void
    setUsers: (users: UserType[]) => void
    setUsersTotalCount: (totalCount: number) => void
    setCurrentPage: (nextPage: number) => void
}
function mapDispatchToProps(dispatch: Dispatch<AnyAction>): mapDispatchToPropsType {
    return {
        follow: (id: number, newStatus: boolean) => dispatch(followAC(id, newStatus)),
        unFollow: (id: number, newStatus: boolean) => dispatch(unfollowAC(id, newStatus)),
        loading: (status: boolean) => dispatch(loadingAC(status)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setUsersTotalCount: (totalCount: number) => dispatch(setUsersTotalCountAC(totalCount)),
        setCurrentPage: (nextPage: number) => dispatch(setCurrentPageAC(nextPage))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)