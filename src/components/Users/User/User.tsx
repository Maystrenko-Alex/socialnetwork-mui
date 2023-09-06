import React from 'react';
import { UserType } from '../../../redux/userReducer';
import defaultAva from './../../../assets/defaultAva.jpg';
import styles from './User.module.css';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

type UserPropsType = {
user: UserType
followHandler: () => void
}


export class User extends React.Component<UserPropsType> {
    
    render() {
        return <Paper key={this.props.user.id} sx={{ display: 'flex', flexDirection: 'row', p: '3px 5px' }}>
                <div className={styles.avaBtn} >
                    <div>
                        <img src={this.props.user.photos.small || defaultAva} width={'30px'} alt={'#'} />
                    </div>
                    <button onClick={this.props.followHandler}>{this.props.user.followed ? 'unfollow' : 'follow'}</button>
                </div>
                <div className={styles.info}>
                    <Typography variant='h5'>{this.props.user.name}</Typography>
                    <div>{this.props.user.status || 'no status'}</div>
                </div>
            </Paper>
    }
}