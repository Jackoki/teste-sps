import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Users from "../pages/Users";
import UserEdit from "../pages/UserEdit";
import Register from "../pages/Register";
import AuthRoute from './AuthRoute'

const router = createBrowserRouter([
    {
    path: "/",
    element: <SignIn />,
  },
    {
    path: "/register",
    element: (
      <AuthRoute>
        <Register />
      </AuthRoute>
      )
  },
  {
    path: "/home",
    element: (
      <AuthRoute>
        <Home />
      </AuthRoute>
    ),
  },  
  {
    path: "/users",
    element: (
      <AuthRoute>
        <Users />
      </AuthRoute>
    ),  
  },
  {
    path: "/users/:userId",
    element: (
      <AuthRoute>
        <UserEdit />
      </AuthRoute>
    ),
  },
]);

export default router;
