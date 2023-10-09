import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { authContext } from "../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(data => {
                const loggedUser = data.user;
                const ssavedUser = { name: loggedUser.displayName, email: loggedUser.email };
                console.log(ssavedUser)
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(ssavedUser)
                })
                    .then(res => res.json())
                    .then(() => {

                    })
                navigate(from, { replace: true });
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-2">
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-circle"><FaGoogle></FaGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;