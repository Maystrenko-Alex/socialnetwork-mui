import React from 'react';
import { UserType } from '../../../redux/userReducer';
import defaultAva from './../../../assets/defaultAva.jpg';
import styles from './User.module.css';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

type UserPropsType = {
    user: UserType
    followHandler: () => void
    isFollowed: boolean
    isLoading: boolean
}


// export const User = (props: UserPropsType) => {

//     return (
//         <Grid item xs={5} >
//             <Paper key={props.user.id} sx={{ display: 'flex', flexDirection: 'row', p: '3px 5px' }}>
//                 <div className={styles.avaBtn} >
//                     <div>
//                         <NavLink to={'/profile/' + props.user.id}>
//                             <img src={props.user.photos.small || defaultAva} width={'30px'} alt={'#'} />
//                         </NavLink>
//                     </div>
//                     <button onClick={props.followHandler} disabled={props.isLoading}>
//                         {props.isFollowed ? 'unfollow' : 'follow'}
//                     </button>
//                 </div>
//                 <div className={styles.info}>
//                     <Typography variant='h5'>{props.user.name}</Typography>
//                     <div>{props.user.status || 'no status'}</div>
//                 </div>
//             </Paper>
//         </Grid>
//     )

// }

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
                        <button onClick={this.props.followHandler} disabled={this.props.isLoading}>
                            {this.props.user.followed ? 'unfollow' : 'follow'}
                        </button>
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
