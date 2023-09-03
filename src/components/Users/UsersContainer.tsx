
import React from 'react';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { UserType, followAC, loadingAC, setUsersAC, unfollowAC } from '../../redux/userReducer';

import axios, { AxiosResponse } from 'axios';
import { User } from './User/User';
import { AnyAction, Dispatch } from 'redux';
import { Users } from './Users';

type UsersContainerPropsType = {
    users: UserType[]
    isLoading: boolean
    follow: (id: number, newStatus: boolean) => void
    unFollow: (id: number, newStatus: boolean) => void
    loading: (status: boolean) => void
    setUsers: (users: UserType[]) => void
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

    componentDidMount(): void {
        if (!this.props.users.length) {
            this.props.loading(true);
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: AxiosResponse) => this.props.setUsers(response.data.items))
                .then(() => this.props.loading(false))
        }
    }
    render() {
        console.log('render run')
        const usersList = this.props.users.map(u => {
            const followHandler = () => {
                u.followed
                    ? this.props.unFollow(u.id, !u.followed)
                    : this.props.follow(u.id, !u.followed)
            }
            return <User key={u.id} user={u} followHandler={followHandler} />
        })
        return (
            <Users isLoading={this.props.isLoading} usersList={usersList} />
        );
    }
}

type MapStateToPropsType = {
    users: UserType[],
    isLoading: boolean
}
function mapStateToProps(state: AppRootStateType): MapStateToPropsType {
    return {
        users: state.users.users,
        isLoading: state.users.isLoading
    }
}

type mapDispatchToPropsType = {
    follow: (id: number, newStatus: boolean) => void
    unFollow: (id: number, newStatus: boolean) => void
    loading: (status: boolean) => void
    setUsers: (users: UserType[]) => void
}
function mapDispatchToProps(dispatch: Dispatch<AnyAction>): mapDispatchToPropsType {
    return {
        follow: (id: number, newStatus: boolean) => dispatch(followAC(id, newStatus)),
        unFollow: (id: number, newStatus: boolean) => dispatch(unfollowAC(id, newStatus)),
        loading: (status: boolean) => dispatch(loadingAC(status)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)