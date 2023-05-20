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
import VewToys from "../Pages/VewToys/VewToys";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";

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
          element:<AllToys></AllToys>
        },
        {
          path:'allToys/:id',
          element:<PrivateRoutes><VewToys></VewToys></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/alltoys/toys/${params.id}`)
        },
        {
          path:'myToy',
          element:<PrivateRoutes><MyToy></MyToy></PrivateRoutes>
        },
        {
          path:'updatetoys/:id',
          element:<PrivateRoutes><UpdateToys ></UpdateToys></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/alltoys/toys/${params.id}`)
        },
        {
          path: 'addAToy',
          element:<PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        
      ]
    },
    {
      path:'/*',
      element:<ErrorPage></ErrorPage>

    }
  ]);


  export default router