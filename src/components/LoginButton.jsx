import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/profile",
            },
        });
    };

    return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;
