import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateLayout = () => {
    const Component = withAuthenticationRequired(Outlet, {
        onRedirecting: () => (
            <div className="page-layout">
                <p>Loading...</p>
            </div>
        ),
    });

    return <Component />;

    // const { isAuthenticated } = useAuth0();

    // return <>{isAuthenticated ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateLayout;
