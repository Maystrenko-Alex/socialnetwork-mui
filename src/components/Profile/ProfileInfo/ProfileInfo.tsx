import { Grid, Avatar, Box, Paper, styled } from '@mui/material';
import React from 'react';

const PaperStyled = styled(Paper)(({ theme }) => ({
    background: ' linear-gradient(45deg, #d299c2, #fef9d7)'
}))

const Item = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}))

const UserNameItem = styled('div')(({ theme }) => ({
    fontSize: theme.typography.fontSize + 7
}))
export const ProfileInfo = () => {


    return (
        <Grid item>
            <PaperStyled >
                <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6yfJR_qtPo7DaWYEhqJt746E0cLY0AiO3kAUPk2FNCNReoy8n7fE5TDaXlg1LqrxV2g&usqp=CAU"
                    sx={{ width: 120, height: 120, position: 'relative', top: 40, left: 20, zIndex: 1 }}
                />
                <Box>
                    <Paper sx={{
                        backgroundColor: 'white',
                        height: '55px',
                        width: '100%',
                        borderRadius: 1,
                        position: 'relative',
                        top: 5,
                        zIndex: 0
                    }}>
                        <Item>
                            <UserNameItem>User name</UserNameItem>
                            <div>User city</div>
                        </Item>
                    </Paper>
                </Box>
            </PaperStyled>
        </Grid>
    );
};

