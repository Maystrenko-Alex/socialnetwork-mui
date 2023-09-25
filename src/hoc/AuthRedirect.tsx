import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppRootStateType } from '../redux/redux-store';

type AuthRedirectPropsType = {
    isLogged: boolean
}

export function AuthRedirect<T extends {}> (Component: React.ComponentType<T>)  {
    class RedirectComponent extends React.Component<AuthRedirectPropsType>{
    
          render() {
            let { isLogged, ...restProps } = this.props;
            if (!isLogged) return <Navigate to={'/login'} />
            return <Component {...restProps as T} />
          }
        }
        let mapStateToProps = (state: AppRootStateType) => ({
            isLogged: state.auth.isLogged
        })
        // let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return connect(mapStateToProps)(RedirectComponent);
};



