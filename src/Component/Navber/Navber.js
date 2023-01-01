import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthProvider/AuthProvider";

const Navber = () => {
  const { userLogOut, user } = useContext(authContext);

  const handlelogout = () => {
    userLogOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const nav = (
    <>
      <li>
        <Link className="font-bold" to="/">
          All
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/creat">
          Create
        </Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <Link onClick={handlelogout} className="font-bold">
              Log Out
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link className="font-bold" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="font-bold" to="/signup">
              Signup
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-purple-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <img
            className="w-12 h-12"
            src="https://media.licdn.com/dms/image/C560BAQHJktiJ1yFkjw/company-logo_200_200/0/1664118780795?e=1680739200&v=beta&t=b-V7wzzZWlfUY49ECUMCmkHp5z3LM_O1c8BtBfHkAnY"
            alt=""
          />
          {/* <a className="btn btn-ghost normal-case text-xl">BITSCOL</a> */}
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        {/* <div className="navbar-end">
          <img
            className="w-20 h-20"
            src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01104813/1268-768x591.png"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Navber;
