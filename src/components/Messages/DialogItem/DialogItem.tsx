import styled from "@emotion/styled";
import { amber } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import styles from './DialodItem.module.css';
import { FriendsType } from "../../../redux/messageReducer";




const StyledNavLinkItem = styled(NavLink)(() => ({
    textDecoration: 'none',
    color: 'black',
    // color: theme.palette.text.secondary,
    '&.active': {
        color: amber[800]
    }
}))

export const DialogItem: React.FC<FriendsType> = ({ id, name }) => {
    
    return (
        <div className={styles.wrapper}>
            
            <StyledNavLinkItem
                to={'/messages/' + id}
                // className={({ isActive})=>( isActive ? 'active' : '')}
            >
                {name}
            </StyledNavLinkItem>
        </div>
    );
}