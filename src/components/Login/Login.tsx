import styles from './Login.module.css';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { blue } from '@mui/material/colors';

type LoginDataType = {
    login: string
    password: string
}

export const Login = () => {
    const [userLogin, setLogin] = useState('')
    const { register, handleSubmit, reset } = useForm<LoginDataType>({
        defaultValues: {
            login: userLogin
        }, 
    })
    const onSubmitHandler = (data: LoginDataType) => {
        console.log(data);
        reset();
    }
    const onChangeLogin = (text: string) => {
        setLogin(text)
        console.log(text)
    }
    const onInvalidSubmitHandler = () => { }

    return (
        <Grid container display={'flex'} height={'80vh'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Paper sx={{ width: '300px', height: '300px' }}>
                
                    <form
                        className={styles.form}
                        // onSubmit={handleSubmit(onSubmitHandler, onInvalidSubmitHandler)}
                    >
                        <Typography variant='h5' color={blue[600]} sx={{textAlign: 'center'}}>LOGIN</Typography>
                        UserLogin:
                        <input  {...register('login', {
                            onChange: (e) => {onChangeLogin(e.currentTarget.value)}
                        })} />
                        Password
                        <input type='password' {...register('password', {
                        })} />
                        <Button onClick={handleSubmit(onSubmitHandler, onInvalidSubmitHandler)} variant='outlined'>Login</Button>
                    </form>
            </Paper>
        </Grid>
    );
};

