import { Button, Grid, Icon, styled } from '@mui/material';
import { amber } from '@mui/material/colors';
// import styles from './NavbarItem.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
interface IProps {
    name: string
    icon: React.ReactNode
}

const ButtonItem = styled(Button)(({ theme }) => ({
    justifyContent: 'flex-start'
}))

const StyledNavLinkItem = styled(NavLink)(({ theme }) => ({
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
    fontSize: '20px',
    textDecoration: 'none',
    '&.active': {
        color: amber[700]
    }
}))

export const NavbarItem = ({ name, icon }: IProps) => {
   
    return <Grid item >
        <ButtonItem disableRipple fullWidth>
            <StyledNavLinkItem
                to={`/${name.toLowerCase()}`}
            >
                <Icon sx={{ display: 'flex', padding: '5px 10px' }}>{icon}</Icon>
                {`${name}`}
            </StyledNavLinkItem>
        </ButtonItem>
    </Grid>

};
