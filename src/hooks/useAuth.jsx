import { useContext } from "react"
import { authContext } from "../AuthProvider/AuthProvider";

export const useAuth = () => {
    const auth = useContext(authContext);
    return auth;
}

