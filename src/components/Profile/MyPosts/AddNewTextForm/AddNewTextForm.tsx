
import React from 'react';
import styles from './AddNewTextForm.module.css';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

type AddNewItemTextPropsType = {
  defaultText?: string
  callback?: () => void
}

type DataType = {
    message: string
}

export const AddNewTextForm = ({
    defaultText = 'Enter new text...',
    callback
}: AddNewItemTextPropsType) => {

    const {register, handleSubmit, reset, formState} = useForm<DataType>();

    const onSubmitHandler = (data: DataType) => {
        if (data?.message) {
            console.log('message: ',data.message)
            reset()
        }
    }

    const onInvalidSubmitHandler = () => alert(formState.errors.message?.message)

    return (
        <form 
          className={styles.wrapper}
          onSubmit={handleSubmit(onSubmitHandler, onInvalidSubmitHandler)}>
            <textarea
                    rows={5}
                placeholder={defaultText} 
                className={styles.textField}
                {...register('message', {
                 minLength: {
                    value: 3,
                    message: 'to short/empty message '
                 }
            })}/>
            {/* <input className={styles.button} type='submit' /> */}
            {/* <button className={styles.button}>Send</button> */}
            <Button className={styles.button} variant='outlined'>Send</Button>
        </form>
    );
};

