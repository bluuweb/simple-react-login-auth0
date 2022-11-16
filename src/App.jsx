import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

const App = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <>
            <h1>APP Auth0</h1>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            <Profile />
        </>
    );
};
export default App;
