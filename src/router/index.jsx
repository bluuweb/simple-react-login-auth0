import { createBrowserRouter } from "react-router-dom";
import PrivateLayout from "../layout/PrivateLayout";
import RootLayout from "../layout/RootLayout";
import Callback from "../pages/Callback";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "callback",
                element: <Callback />,
            },
            {
                path: "profile",
                element: <PrivateLayout />,
                children: [
                    {
                        index: true,
                        element: <Profile />,
                    },
                ],
            },
        ],
    },
]);
