import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        console.log("authentication", authentication, "authStatus", authStatus);

        if (authentication && authStatus !== authentication) {
            console.log("Redirecting to /login from", location.pathname);
            
            // Store the previous path before redirecting
            sessionStorage.setItem("redirectPath", location.pathname);
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            const redirectPath = sessionStorage.getItem("redirectPath") || "/";
            console.log("Redirecting to", redirectPath);
            
            // Clear session storage once redirected
            sessionStorage.removeItem("redirectPath");
            navigate(redirectPath);
        }

        setLoader(false);
    }, [authStatus, navigate, authentication, location.pathname]);

    return loader ? <h1>Loading...</h1> : <>{children}</>;
}
