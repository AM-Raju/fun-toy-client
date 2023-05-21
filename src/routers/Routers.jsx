import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddAToy from "../pages/addAToy/AddAToy";
import AllToys from "../pages/allToys/AllToys";
import MyToys from "../pages/myToys/MyToys";
import Blog from "../pages/blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-a-toy",
        element: (
          <PrivateRoutes>
            <AddAToy></AddAToy>
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/toy-details/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails></ToyDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://fun-toy-server.vercel.app/toyDetails/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
