import { Grid, CircularProgress, Pagination } from "@mui/material";
import React from "react";
import { User } from "./User/User";
import { UsersStateType } from "../../redux/userReducer";

type UsersPropsType = {
    usersData: UsersStateType
    follow: (id: number, newStatus: boolean) => void
    unFollow: (id: number, newStatus: boolean) => void
    loading: (status: boolean) => void
    onChangeHandler: (e: React.ChangeEvent<unknown>, value: number) => void
}
export class Users extends React.Component<UsersPropsType> {

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