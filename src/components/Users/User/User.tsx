import React from 'react';
import { UserType } from '../../../redux/userReducer';
import defaultAva from './../../../assets/defaultAva.jpg';
import styles from './User.module.css';
import Paper from '@mui/material/Paper';
import { Button, ButtonProps, CircularProgress, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

type UserPropsType = {
    user: UserType
    followHandler: () => void
    isFollowed: boolean
    isFollowing: boolean
}

const StyledButton = styled(Button)<ButtonProps>(() => ({
    minWidth: '114px',
    minHeight: '36px'
})
)


export class User extends React.Component<UserPropsType> {

    render() {
        return (
            <Grid item xs={5} >
                <Paper key={this.props.user.id} sx={{ display: 'flex', flexDirection: 'row', p: '3px 5px' }}>
                    <div className={styles.avaBtn} >
                        <div>
                            <NavLink to={'/profile/' + this.props.user.id}>
                                <img src={this.props.user.photos.small || defaultAva} width={'30px'} alt={'#'} />
                            </NavLink>
                        </div>
                        <StyledButton variant='outlined' onClick={this.props.followHandler} disabled={this.props.isFollowing}>
                            {
                                this.props.isFollowing
                                    ? <CircularProgress size={20} />
                                    : (this.props.user.followed ? 'unfollow' : 'follow')
                            }
                        </StyledButton>
                    </div>
                    <div className={styles.info}>
                        <Typography variant='h5'>{this.props.user.name}</Typography>
                        <div>{this.props.user.status || 'no status'}</div>
                    </div>
                </Paper>
            </Grid>
        )
    }
}
