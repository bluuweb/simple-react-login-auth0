import { useAuth0 } from "@auth0/auth0-react";

const Callback = () => {
    const { error } = useAuth0();

    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
            </div>
        );
    }

    return <h1>Callback sala de espera...</h1>;
};

export default Callback;
