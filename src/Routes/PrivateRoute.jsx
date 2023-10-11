import { Navigate, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        // While loading, show a loading indicator or a message
        return <p>Loading...</p>;
    }

    if (!user) {
        // If there is no user, redirect to the login page
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If there is a user, render the protected content
    return children;
};

export default PrivateRoute;
