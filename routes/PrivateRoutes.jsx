import React from 'react';
import { UserContext } from '../src/provider/UserProvider';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user} = React.useContext(UserContext);

    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true} />
};

export default PrivateRoutes;