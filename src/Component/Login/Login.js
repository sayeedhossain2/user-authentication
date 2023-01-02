import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import login from "../../assets/login.svg";
import { BounceLoader } from "react-spinners";
import { FaEnvelope, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { loginUser, loading, googleUserLogin, user } = useContext(authContext);
  const [successfully, setSuccessfully] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const googleProvider = new GoogleAuthProvider();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user?.email) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user?.email]);

  if (loading) {
    return (
      <h1 className=" flex justify-center mt-32 items-center">
        <BounceLoader color="#36d7b7" />
      </h1>
    );
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccessfully("User Login Successfully");
        setError("");
        toast.success("Wow Login successfully");
        form.reset();
        // navigate(from, { replace: true });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccessfully("");
      });
  };

  const handleWithGoogle = () => {
    googleUserLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        if (user.email) {
          toast.success("Wow Login successfully");
          console.log(user);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col grid md:grid-cols-2  sm:gap-10 md:gap-44">
          <div>
            <img className=" lg:h-[400px]" src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
            <div>
              <h1 className="text-5xl font-bold pt-5 text-purple-600">
                Login now!
              </h1>
              <form onSubmit={handleLogin} className="card-body lg:p-14">
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
                  {/* </span> */}
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <p className="font-bold text-green-700">{successfully}</p>
                <p className="font-bold text-red-700">{error}</p>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary -mb-10"
                    type="submit"
                    value="Login"
                  />
                  <ToastContainer />
                </div>
              </form>

              <div className=" my-5">
                <button
                  onClick={handleWithGoogle}
                  className=" w-4/6    btn btn-outline btn-primary"
                >
                  <FaGoogle />
                  <span className="ml-3 ">Signup via google</span>
                </button>
              </div>

              <h2 className="mt-2">
                Not Registered Yet?{" "}
                <Link to="/signup">
                  <span className="text-blue-800 font-bold">SignUp</span>
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
