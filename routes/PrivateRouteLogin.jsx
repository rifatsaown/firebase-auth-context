import React from 'react';
import { UserContext } from '../src/provider/UserProvider';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRouteLogin = ({children}) => {
    const {user} = React.useContext(UserContext);

    if(!user){
        return children;
    }

    return <Navigate to="/" replace={true} />
};

export default PrivateRouteLogin;