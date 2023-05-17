import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";

import Login from "../User/Login/Login";
import Registration from "../User/Registration/Registration";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Registration></Registration>
        }
      ]
    },
  ]);


  export default router