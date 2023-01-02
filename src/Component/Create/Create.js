import React from "react";
import code from "../../assets/code.gif";
import Swal from "sweetalert2";

const handleSignup = (event) => {
  event.preventDefault();

  const form = event.target;
  const logo = form.logo.value;
  const userid = form.userid.value;
  const name = form.name.value;
  const password = form.password.value;

  console.log(logo, userid, name, password);

  const DetailsInfo = {
    logo: logo,
    userid: userid,
    name: name,
    password: password,
  };

  fetch("https://job-task-server-nu.vercel.app/details", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(DetailsInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      form.reset();
      //   toast("Service added Successfully!");
      Swal.fire("Good job!", "Added Company Details!", "success");
    })
    .catch((err) => console.error(err));
};

const Create = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold my-4 text-purple-500">
        Please Added Your Company Details
      </h1>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row gap-52">
          <div>
            <img className="lg:h-[500px]" src={code} alt="" />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-purple-500">
            {/* <h1 className="text-5xl font-bold pt-5">Signup now</h1> */}

            <div>
              <form onSubmit={handleSignup} className="card-body lg:p-20">
                {/* 1 */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Logo</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="logo"
                    placeholder="Logo"
                    className="input input-bordered "
                  />
                </div>

                {/* 2 */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">user Id</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="userid"
                    placeholder="User Id"
                    className="input input-bordered"
                  />
                </div>

                {/* 3 */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>

                {/* 4 */}
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

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
