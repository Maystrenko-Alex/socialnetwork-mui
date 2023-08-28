
import React from 'react';
import styles from './AddNewTextForm.module.css';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Button, Tooltip } from '@mui/material';

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

    const { register, handleSubmit, reset, formState: { errors, touchedFields }, trigger } = useForm<DataType>({
        defaultValues: {
            message: value
        }
    });

    const onSubmitHandler: SubmitHandler<DataType> = (data: DataType) => {
        const currentText = data.message.trim();
        if (currentText) {
            onClickHandler(data.message)
            // setError(false)
        }
        reset()
    }

    const onInvalidSubmitHandler: SubmitErrorHandler<DataType> = () => {
        trigger('message');
        // alert( 'Your input is required')
        // alert(errors.message?.message)
        alert(touchedFields.message ? errors.message?.message : 'Your input is required')
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
                    required: 'Mesaage is empty...',
                    minLength: {
                        value: 3,
                        message: 'Message length must be at least 3 characters'
                    },
                    maxLength: {
                        value: 9,
                        message: ' to long message...'
                    },
                    onChange: (e) => onChangeHandler(e.currentTarget.value)
                    // onChange: changeHandler
                })}
            />
            <Tooltip title={'The length of the message must be at least 3 and no more than 10 characters'}>
                <Button
                    className={styles.button}
                    type={'submit'}
                    variant='outlined'
                >
                    Send
                </Button>
            </Tooltip>
        </form>
    );
};

