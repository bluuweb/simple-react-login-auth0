import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default RootLayout;
