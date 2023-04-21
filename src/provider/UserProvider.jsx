import { createContext } from "react";

export const UserContext = createContext(null);

// eslint-disable-next-line react/prop-types
const UserProvider = ({children}) => {
    const user = { displayName: "John Doe"}
    return (
        <div>
            <UserContext.Provider value={user}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default UserProvider;