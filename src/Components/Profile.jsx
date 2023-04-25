import React from 'react';
import { UserContext } from '../provider/UserProvider';

const Profile = () => {
    const {user } = React.useContext(UserContext);
    return (
        <>
            <h1>{user.email}</h1>
        </>
    );
};

export default Profile;