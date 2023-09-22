import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { AppRootStateType } from "../../redux/redux-store";
import { AuthStateType, getAuthUserData } from "../../redux/authReducer";

type HeaderContainerPropsType = {
    auth: AuthStateType
    getAuthUserData: () => void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount(): void {
        this.props.getAuthUserData();
    }
    render() {
        return <Header auth={this.props.auth} />
    }
}
type MapStateToPropsType = {
    auth: AuthStateType
}
const MapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    auth: state.auth
})
export default connect(MapStateToProps, { getAuthUserData })(HeaderContainer);

