import { Button, Grid, Icon, ThemeProvider, Typography, styled } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { NavbarStateType } from '../../redux/navbarReducer';
import { AccountBoxOutlined, RateReviewOutlined, ManageAccountsOutlined, ReceiptLongOutlined } from '@mui/icons-material';
import { amber, yellow } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';

interface IPropsType {

}



export const Navbar = (props: IPropsType) => {

  const icons: React.ReactNode[] = [
    <AccountBoxOutlined />,
    <RateReviewOutlined />,
    <ReceiptLongOutlined />,
    <ManageAccountsOutlined />
  ]
  const ButtonItem = styled(Button)(({ theme }) => ({
    justifyContent: 'flex-start'
  }))
  const NavLinkItem = styled(NavLink)(({ theme }) => ({
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
    '&.active': {
      color: amber[700]
    }    
  }))

  const navbar = useSelector<AppRootStateType, NavbarStateType>(state => state.navbar);

  const navbarList = navbar.navbarList.map((item, index) => {
    let curentName = item.title.toLowerCase()

    return <Grid item key={item.id}>
      <ButtonItem disableRipple fullWidth>
        <NavLinkItem
          className={({ isActive }) => isActive ? 'active' : ''}
          to={`/${curentName}`}
          style={{  textDecoration: 'none' }}
        >
          {/* {icons[index]}  */}
          <Icon sx={{display: 'flex', padding: '5px 10px'}}>{icons[index]}</Icon>
          {`${curentName.toUpperCase()}`}
        </NavLinkItem>
      </ButtonItem>
    </Grid>
  })
  return (
    <Grid container direction={'column'}>
      {navbarList}
    </Grid>
  );
};

