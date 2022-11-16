import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Auth0Provider } from "@auth0/auth0-react";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-35xgtliq.us.auth0.com"
            clientId="pkeRfLCt78WArbsBGGTWc6rMeanr7DE8"
            redirectUri={window.location.origin}
        >
            <RouterProvider router={router} />
        </Auth0Provider>
    </React.StrictMode>
);
