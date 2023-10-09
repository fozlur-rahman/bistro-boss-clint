import { useContext } from 'react';
import loginAvator from '../../../assets/others/authentication1.png'
import { authContext } from '../../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';


const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile, logOut } = useContext(authContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then(() => {
                        const savedUser = { name: name, photo: photo, email: email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'top',
                                        icon: 'success',
                                        title: 'User created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                            })

                        logOut();
                        navigate('/')
                    })


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
                    <input className='bg-gray-100 py-4 px-10 ' type="text" id='name' placeholder='Enter Name' />
                    <input className='bg-gray-100 py-4 px-10 ' type="text" id='photo' placeholder='Enter Photo url' />
                    <input className='bg-gray-100 py-4 px-10 ' type="email" id='email' placeholder='Enter Email' />
                    <input className='bg-gray-100 py-4 px-10 ' type="password" id='password' placeholder='Enter Password' />
                    <input className='bg-red-300 btn py-4 px-10 ' type="submit" placeholder='Enter Email' />
                </form>
                <SocialLogin></SocialLogin>
                <small ><Link className='btn btn-link capitalize ' to='/login'>Already have an account? Login</Link></small>
            </div>
        </div>
    );
};

export default SignUp;