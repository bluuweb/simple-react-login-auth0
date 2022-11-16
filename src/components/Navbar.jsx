import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <NavLink to="/profile">Profile</NavLink>
                    <LogoutButton />
                </>
            ) : (
                <>
                    <NavLink to="/">Home</NavLink>
                    <LoginButton />
                </>
            )}
        </div>
    );
};
export default Navbar;
