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
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
}
export const Users = (props: UsersPropsType) => {

    const pages = Math.ceil(props.usersData.totalCount / props.usersData.pageSize);

    const usersList = props.usersData.users.map(u => {
        const followHandler = () => {
            props.toggleIsFollowingProgress(true, u.id)

            if (!u.followed) {
                usersAPI.follow(u.id).then(res => {
                    if (res.resultCode === 0) {
                        props.follow(u.id)
                    } else { console.error(res.messages[0]) }
                }
                ).finally(() => {
                    props.toggleIsFollowingProgress(false, u.id)
                })
            } else {
                usersAPI.unfollow(u.id).then(res => {
                    if (res.resultCode === 0) {
                        console.log('unfollow')
                        props.unFollow(u.id)
                    } else { console.error(res.messages[0]) }
                }).finally(() => {
                    props.toggleIsFollowingProgress(false, u.id)
                })
            }
        }
        return (
            // <Grid item xs={5} key={u.id}>
                <User 
                    key={u.id}
                    user={u}
                    isFollowed={u.followed}
                    followHandler={followHandler}
                    isLoading={props.usersData.followingInProgress.includes(u.id)} />
            // </Grid>
        );
    })

    return (
        <div>
            <Grid container
                sx={{
                    flexDirection: 'row',
                    // justifyContent: props.usersData.isLoading ? 'center' : null,
                    justifyContent: 'center',
                    gap: 1,
                    minHeight: '82vh',
                    alignContent: 'flex-start',
                    // alignItems: props.usersData.isLoading ? 'center' : null
                }} >
                {
                    props.usersData.isLoading
                        ? <CircularProgress size={'5rem'} sx={{mt: '200px'}}/>
                        : usersList
                }
            </Grid>
            <Grid container sx={{ justifyContent: 'center', width: '100%', pt: '20px' }}>
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