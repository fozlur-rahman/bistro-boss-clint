import { useContext } from 'react';
import loginAvator from '../../../assets/others/authentication1.png'
import { authContext } from '../../../AuthProvider/AuthProvider';


const SignUp = () => {
    const { createUser } = useContext(authContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className='flex items-center justify-center gap-10 p-16 m-28 shadow-md'>
            <div className='w-1/2'>
                <img src={loginAvator} alt="" />
            </div>
            <div className='w-1/2 p-10 shadow'>
                <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                <form onSubmit={handleSignUp} className='flex flex-col space-y-10 p-10'>
                    <input className='bg-gray-100 py-4 px-10 ' type="email" id='email' placeholder='Enter Email' />
                    <input className='bg-gray-100 py-4 px-10 ' type="password" id='password' placeholder='Enter Password' />
                    <input className='bg-red-300 btn py-4 px-10 ' type="submit" placeholder='Enter Email' />
                </form>
            </div>
        </div>
    );
};

export default SignUp;