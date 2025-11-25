import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../components/Login";
import Profile from "../pages/profile";
import Card from "../components/Cards";
import Rateds from "../components/Rateds";

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