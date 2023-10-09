import { useContext, useEffect, useRef } from 'react';
import loginAvator from '../../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate } from 'react-simple-captcha';
import { authContext } from '../../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const Login = () => {

    const captchaRef = useRef(null);
    const { logIn } = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    // const navigate = useNavigate();
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userData = { email, password };
        console.log(userData);
        logIn(email, password)
            .then(data => {
                console.log(data)
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className='flex items-center justify-center gap-10 p-16 m-28 shadow-md'>
            <div className='w-1/2'>
                <img src={loginAvator} alt="" />
            </div>
            <div className='w-1/2 p-10 shadow'>
                <h1 className='text-3xl font-bold text-center'>Login</h1>
                <form onSubmit={handleLogin} className='flex flex-col space-y-10 p-10'>
                    <input className='bg-gray-100 py-4 px-10 ' type="email" id='email' placeholder='Enter Email' />
                    <input className='bg-gray-100 py-4 px-10 ' type="password" id='password' placeholder='Enter Password' />
                    <LoadCanvasTemplate></LoadCanvasTemplate>
                    <input className='bg-gray-100 py-4 px-10 ' ref={captchaRef} type="text" id='' placeholder='Enter Text' />
                    <input disabled={false} className='bg-red-300 btn py-4 px-10 ' type="submit" placeholder='Enter Email' />
                </form>
                <SocialLogin></SocialLogin>
                <small ><Link className='btn btn-link capitalize ' to='/signup'>Are you new? please Sign Up</Link></small>
            </div>
        </div>
    );
};

export default Login;