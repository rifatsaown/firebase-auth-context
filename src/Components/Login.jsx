import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";

const Login = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const passRef = useRef(null);

  const { loginUser, googleLogin } = useContext(UserContext);

  // login with google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        setError("");
        setSuccess("Login Successful");
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  }

  // login with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        setError("");
        setSuccess("Login Successful");
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
        passRef.current.value = "";
      });
  };


  return (
    <>
      <div className="hero min-h-[90.9vh] bg-base-200">
        <div className="hero-content flex-col">
          <h1 className="text-3xl font-bold pb-4">Please Login</h1>
          <form
            onSubmit={handleSubmit}
            className="card w-96 shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  ref={passRef}
                  placeholder="Enter Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p>{success}</p>
                <p>{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control">
                <button type="button" className="btn btn-primary btn-outline" onClick={handleGoogleLogin}>
                  Login with Google
                </button>
              </div>
              <Link className="text-center" to="/register">
                New in Town?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
