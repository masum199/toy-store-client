import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";

import Login from "../User/Login/Login";
import Registration from "../User/Registration/Registration";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToy from "../Pages/MyToy/MyToy";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Blog from "../Pages/Blog/Blog";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
        },
        {
          path:'allToys',
          element:<PrivateRoutes><AllToys></AllToys></PrivateRoutes>
        },
        {
          path:'myToy',
          element:<PrivateRoutes><MyToy></MyToy></PrivateRoutes>
        },
        {
          path: 'addAToy',
          element:<PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ]
    },
    {
      path:'/*',
      element:<ErrorPage></ErrorPage>

    }
  ]);


  export default router