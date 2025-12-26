import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../components/Login";
import Profile from "../pages/profile";
import Card from "../components/Cards";
import Rateds from "../components/Rateds";
import Signup from "../components/Signup";
import Details from "../pages/Details";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRouter from "../provider/PrivateRouter";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/cardData/:skillId",
                element: <Card></Card>
            },
            {
                path: "/details",
                element: <PrivateRouter>
                    <Details></Details>
                </PrivateRouter>
            },
            {
                path: "/rateds",
                element: <Rateds></Rateds>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },

        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/signup",
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: "/news",
        element: <div>News Layout</div>,
    },
    {
        path: "/*",
        element: <div>error 404</div>,
    },
]);

export default router;