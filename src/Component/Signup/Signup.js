import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import login from "../../assets/login.svg";
import { BounceLoader } from "react-spinners";

const Signup = () => {
  const { createUser, loading } = useContext(authContext);
  const [successfully, setSuccessfully] = useState("");
  const [error, setError] = useState("");

  if (loading) {
    return (
      <h1 className=" flex justify-center mt-32 items-center">
        <BounceLoader color="#36d7b7" />
      </h1>
    );
  }

  const handleSignup = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccessfully("User Login Successfully");
        setError("");

        toast("Wow Sign Up successfully");
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccessfully("");
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse grid md:grid-cols-2  sm:gap-10 md:gap-44">
          <div>
            <img className=" lg:h-[400px]" src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold pt-5 text-purple-600">
              Signup now
            </h1>
            <form onSubmit={handleSignup} className="card-body lg:p-14">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="User Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="Email"
                  required
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="Password"
                  required
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <p className="font-bold text-green-700">{successfully}</p>
              <p className="font-bold text-red-700">{error}</p>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign UP"
                />
                <ToastContainer />
              </div>
              <h2 className="mt-2">
                Already have an account {""}
                <Link to="/login">
                  <span className="text-blue-800 font-bold">Login</span>
                </Link>
              </h2>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
