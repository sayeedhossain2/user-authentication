import { createBrowserRouter } from "react-router-dom";
import Create from "../../Component/Create/Create";
import Home from "../../Component/Home/Home";
import Login from "../../Component/Login/Login";
import Signup from "../../Component/Signup/Signup";

import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },
      {
        path: "/creat",
        element: (
          <PrivateRoute>
            <Create></Create>
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
