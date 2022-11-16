import { createBrowserRouter } from "react-router-dom";
import PrivateLayout from "../layout/PrivateLayout";
import RootLayout from "../layout/RootLayout";
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
