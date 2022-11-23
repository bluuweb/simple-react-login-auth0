import { useAuth0 } from "@auth0/auth0-react";

const LoadingUser = ({ children }) => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return <>{children}</>;
};

export default LoadingUser;
