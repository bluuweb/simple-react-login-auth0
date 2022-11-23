import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import { Auth0Provider } from "@auth0/auth0-react";
import LoadingUser from "../components/LoadingUser";

const RootLayout = () => {
    const navigate = useNavigate();

    const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_REACT_APP_AUTH0_CALLBACK_URL;

    // React Router v6 no existe el history = navigate
    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    if (!(domain && clientId && redirectUri)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={redirectUri}
            onRedirectCallback={onRedirectCallback}
        >
            <LoadingUser>
                <Navbar />
                <Outlet />
            </LoadingUser>
        </Auth0Provider>
    );
};

export default RootLayout;
