
import React from 'react';
import styles from './AddNewTextForm.module.css';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@mui/material';

type AddNewItemTextPropsType = {
    value: string
    rows?: number
    defaultText?: string
    onClickHandler: (text: string) => void
    onChangeHandler: (text: string) => void
}

type DataType = {
    message: string
}

export const AddNewTextForm = ({
    value,
    rows = 5,
    defaultText = ' Enter new text...',
    onClickHandler,
    onChangeHandler
}: AddNewItemTextPropsType) => {
   
    const { register, handleSubmit, reset, formState } = useForm<DataType>({
        defaultValues: {
            message: value
        }
    });

    const onSubmitHandler: SubmitHandler<DataType> = (data: DataType) => {
        const currentText = data.message.trim();
        if (currentText) {
            onClickHandler(data.message)
        }
        reset()
    }

    const onInvalidSubmitHandler: SubmitErrorHandler<DataType> = () => {
        alert(formState.errors.message?.message)
        reset()
    }
    
    return (
        <form
            className={styles.wrapper}

            onSubmit={handleSubmit(onSubmitHandler, onInvalidSubmitHandler)}>
            <textarea
                rows={rows}
                placeholder={defaultText}
                className={styles.textField}
                {...register('message', {
                    required: {
                        value: true,
                        message: 'to short/empty message '
                    },
                    onChange: ( e) => onChangeHandler(e.currentTarget.value)
                    // onChange: changeHandler
                })}
            />
            
            <Button type={'submit'} className={styles.button} variant='outlined'>Send</Button>
        </form>
    );
};

