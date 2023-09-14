import { Grid, CircularProgress, Pagination } from "@mui/material";
import React from "react";
import { User } from "./User/User";
import { UsersStateType } from "../../redux/userReducer";
import axios from "axios";

type UsersPropsType = {
    usersData: UsersStateType
    follow: (id: number) => void
    unFollow: (id: number) => void
    loading: (status: boolean) => void
    onChangeHandler: (e: React.ChangeEvent<unknown>, value: number) => void
}
export class Users extends React.Component<UsersPropsType> {
componentDidUpdate(prevProps: Readonly<UsersPropsType>, prevState: Readonly<{}>, snapshot?: any): void {
    
}
    render() {

        const pages = Math.round(this.props.usersData.totalCount / this.props.usersData.pageSize);

        const usersList = this.props.usersData.users.map(u => {
            const followHandler = () => {
                axios.get('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {
                    withCredentials: true
                })
                .then(res => {
                    if (res.data === false){
                        // res.data 
                        //отписаться
                         axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '1419457d-4aed-47a0-87f2-a18133aee9a0'
                            }
                        })
                        .then( res => {
                            if (res.data.resultCode === 0){
                                this.props.follow(u.id)
                            } else {console.error(res.data.messages[0])}
                        })
                        //подписаться
                        // : axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {withCredentials: true})
                        // .then(res => {
                        //     if (res.data.resultCode === 0){
                        //         console.log('follow')
                        //     }
                        // })
                    } else {
                         axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '1419457d-4aed-47a0-87f2-a18133aee9a0'
                            }
                        })
                        .then(res => {
                            if (res.data.resultCode === 0){
                                console.log('unfollow')
                                this.props.unFollow(u.id)
                            } else {console.error(res.data.messages[0])}
                        })
                    }
                })
                // u.followed
                //     ? this.props.unFollow(u.id, !u.followed)
                //     : this.props.follow(u.id, !u.followed)
            }
            return (
                <Grid item xs={5} key={u.id}>
                    <User user={u} followHandler={followHandler.bind(this)} />
                </Grid>
            );
        })
        return (
            <div>
                <Grid container
                    sx={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: 1,
                        minHeight: '80vh',
                        alignItems: this.props.usersData.isLoading ? 'center' : null
                    }} >
                    {
                        this.props.usersData.isLoading
                            ? <CircularProgress  size={this.props.usersData.isLoading && '5rem'}  />
                            : usersList
                    }
                </Grid>
                <Grid container sx={{ justifyContent: 'center', width: '100%', pt: '20px' }}>
                    <Pagination
                        page={this.props.usersData.currentPage}
                        count={pages}
                        variant="outlined"
                        color="secondary"
                        sx={{ justifySelf: 'center' }}
                        onChange={this.props.onChangeHandler}
                    />
                </Grid>
            </div>
        );
    }
}