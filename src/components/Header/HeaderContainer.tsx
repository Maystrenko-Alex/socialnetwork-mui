import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { AppRootStateType } from "../../redux/redux-store";
import { AuthStateType, UserDataType, setAuthUserDataAC } from "../../redux/authReducer";

type HeaderContainerPropsType = {
    auth: AuthStateType
    setAuthUserDataAC: (data: UserDataType) => void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount(): void {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0)
                this.props.setAuthUserDataAC(res.data.data)
            })
    }
    render() {
        return <Header auth={this.props.auth}/>
    }
}
type MapStateToPropsType = {
    auth: AuthStateType
}
const MapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    auth: state.auth 
})
export default connect(MapStateToProps, {setAuthUserDataAC})( HeaderContainer);

