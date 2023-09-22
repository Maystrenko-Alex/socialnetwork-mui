import { Grid, CircularProgress, Pagination } from "@mui/material";
import React from "react";
import { User } from "./User/User";
import { UsersStateType } from "../../redux/userReducer";

type UsersPropsType = {
    usersData: UsersStateType
    loading: (status: boolean) => void
    onChangeHandler: (e: React.ChangeEvent<unknown>, value: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
}
export const Users = (props: UsersPropsType) => {

    const pages = Math.ceil(props.usersData.totalCount / props.usersData.pageSize);

    const usersList = props.usersData.users.map(u => {
        const followHandler = () => {
            props.toggleIsFollowingProgress(true, u.id);
            !u.followed
                ? props.followThunk(u.id)
                : props.unfollowThunk(u.id);
        }
        return <User
            key={u.id}
            user={u}
            isFollowed={u.followed}
            followHandler={followHandler}
            isFollowing={props.usersData.followingInProgress.includes(u.id)} />
    })

    return (
        <div>
            <Grid container
                sx={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 1,
                    minHeight: '82vh',
                    alignContent: 'flex-start'
                }} >
                {
                    props.usersData.isLoading
                        ? <CircularProgress size={'5rem'} sx={{ mt: '200px' }} />
                        : usersList
                }
            </Grid>
            <Grid container sx={{ justifyContent: 'center', width: '100%', pt: '10px' }}>
                <Pagination
                    page={props.usersData.currentPage}
                    count={pages}
                    variant="outlined"
                    color="secondary"
                    sx={{ justifySelf: 'center' }}
                    onChange={props.onChangeHandler}
                />
            </Grid>
        </div>
    );
}