import React from 'react';
import { UserContext } from '../provider/UserProvider';

const Profile = () => {
    const {user} = React.useContext(UserContext);
    return (
        <div>
            <h1>{user.email}</h1>
        </div>
    );
};

export default Profile;