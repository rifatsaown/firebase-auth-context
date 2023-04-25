import { useContext } from "react";
import { UserContext } from "../provider/UserProvider";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div
        className="hero min-h-[90.9vh]"
        style={{
          backgroundImage: `url("https://codeflarelimited.com/blog/wp-content/uploads/2021/01/react-one.jpg.webp")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              {user ? (
                <span className="text-3xl font-bold">
                  {user.displayName ? (
                    <span>{user.displayName}</span>
                  ) : (
                    <span>Welcome</span>
                  )}
                </span>
              ) : (
                <span>Welcome</span>
              )}
            </h1>

            <p className="mb-5">
              This Website is made by me for my own learning purpose. I am
              learning ReactJS with firebase auth. I am using TailwindCSS for
              styling.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
