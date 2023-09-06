import React from 'react';
import styles from './Post.module.css';
import { Badge, BadgeProps, IconButton, Paper, PaperProps, styled } from '@mui/material';
import { ThumbUpOutlined } from '@mui/icons-material';
type PostPropsType = {
    title?: string
    likesCount?: number
}
const StyledPaper = styled(Paper)<PaperProps>((theme) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5px',
    margin: '5px',
    width: 'fit-content',
    maxWidth: '70%',
    gap: '10px'
}));
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 0,
        top: 21,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px'
    },
}));
 const Post = ({ title = 'some post', likesCount = 0 }: PostPropsType) => {

    return (
        <StyledPaper elevation={3}>
            {/* <div className={styles.wrapper}> */}
            <img
                style={{backgroundColor: '#1976d2'}}
                className={styles.ava}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpq3i8K9k7zyqEgMvXg9pKHk8p7UwEZMUaw&usqp=CAU'
                alt='avatar'
            />
            <span>{title}</span>
            <IconButton size="small" aria-label="show 4 new mails" color="inherit" sx={{alignSelf: 'flex-end ', marginRight: '10px'}} >
                <StyledBadge badgeContent={likesCount} color="info" >
                    <ThumbUpOutlined />
                </StyledBadge>
            </IconButton>
            {/* </div> */}
        </StyledPaper>
    );
};
export default React.memo(Post)
