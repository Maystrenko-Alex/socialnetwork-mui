import { Grid, CircularProgress } from "@mui/material";
import React from "react";

type UsersPropsType = {
    isLoading: boolean
    usersList: React.ReactNode[]
}
export class Users extends React.Component<UsersPropsType> {

    render() {
        return (
            <>
            <Grid container flexDirection={'column'}>
                {
                    this.props.isLoading
                        ? <CircularProgress />
                        : this.props.usersList
                }
            </Grid>
        </>
        );
    }
}