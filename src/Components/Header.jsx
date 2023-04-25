import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";

const Header = () => {
  const { user, logOut } = useContext(UserContext);

  const handleSignout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      <div className="navbar bg-blue-200 rounded-xl">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {user ? (
              <li>
                {" "}
                <span>{user.email}</span>{" "}
                <button
                  onClick={handleSignout}
                  className="btn btn-primary btn-outline"
                >
                  Sign Out
                </button>{" "}
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
