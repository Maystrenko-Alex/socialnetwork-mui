import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { NavbarStateType } from '../../redux/navbarReducer';
import { AccountBoxOutlined, RateReviewOutlined, ManageAccountsOutlined, ReceiptLongOutlined, EqualizerOutlined, ContactPageOutlined } from '@mui/icons-material';
import { NavbarItem } from './NavbarItem';
interface IPropsType {

}

const icons: React.ReactNode[] = [
  <AccountBoxOutlined />,
  <RateReviewOutlined />,
  <ContactPageOutlined />,
  <ReceiptLongOutlined />,
  <EqualizerOutlined /> ,
  <ManageAccountsOutlined />
]


export const Navbar = (props: IPropsType) => {


  const navbar = useSelector<AppRootStateType, NavbarStateType>(state => state.navbar);

  const navbarList = navbar.navbarList.map((item, index) => {
    return <NavbarItem key={index} name={item.title} icon={icons[index]} />

  })
  return (
    <Grid container direction={'column'}>
      {navbarList}
    </Grid>
  );
};

