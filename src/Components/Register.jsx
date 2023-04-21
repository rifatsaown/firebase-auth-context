import { Link } from "react-router-dom";

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
    }
  return (
    <>
      <div className="hero min-h-[90.9vh] bg-base-200">
        <div className="hero-content flex-col">
            <h1 className="text-3xl font-bold pb-4">Please Register</h1>
          <form onSubmit={handleSubmit} className="card w-96 shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="input input-bordered"
                />
              </div>
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
                  placeholder="Choose Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <Link className="text-center" to="/register">
                Alreaddy in Town?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
