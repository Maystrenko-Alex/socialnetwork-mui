import { Grid, CircularProgress, Pagination } from "@mui/material";
import React from "react";
import { User } from "./User/User";
import { UsersStateType } from "../../redux/userReducer";
import { usersAPI } from "../../api/api";

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

        const pages = Math.ceil(this.props.usersData.totalCount / this.props.usersData.pageSize);
        console.log(pages)
        const usersList = this.props.usersData.users.map(u => {
            const followHandler = () => {
                usersAPI.isFollow(u.id).then(res => {
                    (res === false)
                        ? usersAPI.follow(u.id).then(res => {
                            console.log(res)
                            if (res.resultCode === 0) {
                                this.props.follow(u.id)
                            } else { console.error(res.messages[0]) }
                        }
                        )
                        : usersAPI.unfollow(u.id).then(res => {
                            if (res.resultCode === 0) {
                                console.log('unfollow')
                                this.props.unFollow(u.id)
                            } else { console.error(res.messages[0]) }
                        })
                })
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
                        justifyContent: this.props.usersData.isLoading ? 'center' : null,
                        gap: 1,
                        minHeight: '80vh',
                        alignContent: 'flex-start',
                        // alignItems: this.props.usersData.isLoading ? 'center' : null
                    }} >
                    {
                        this.props.usersData.isLoading
                            ? <CircularProgress size={this.props.usersData.isLoading && '5rem'} />
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