import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../components/Login";
import Profile from "../pages/profile";
import Card from "../components/Cards";
import Rateds from "../components/Rateds";
import Signup from "../components/Signup";
import Details from "../pages/Details";

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
                path: "/cardData/:skillId",
                element: <Card></Card>
            },
            {
                path: "/details",
                element: <Details></Details>
            },
            {
                path: "/cardData/:skillId",
                element: <Rateds></Rateds>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },

        ]
    },
    {
        path: "/auth",
        element: <div>Authentication Layout</div>,
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