import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-dots loading-xs"></span>
    }
    if (user) {
        return children;
    }
    else {
        return (
            <Navigate to='/login' state={{ from: location }} replace></Navigate>
        );
    }

};

export default PrivateRoute;