import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../assets/Images/Login/login.jpeg'

import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';





const Login = () => {
    const { setLoading, createUser, signIn, logOut, updateUserProfile, googleSignIn } = useAuth();
    const [loginError, setLoginError] = useState('');

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = data => {
        // console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const displayUser = result.user;
                console.log(displayUser)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
                setLoginError(error.message)
            })
    }

    const handelGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL }
                axiosPublic.post('/users', savedUser)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user added to the database')
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            setLoading(false)
                            navigate(from, { replace: true });
                        }
                        else {
                            setLoading(false)
                            navigate(from, { replace: true });
                        }
                    })

            })
            .catch(error => {
                setLoading(false)
                setLoginError(error.message)

            })
    }


    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${loginImg})`, backgroundSize: "cover" }} className='h-[800px] flex justify-center items-center p-2'>
            <div className='w-full sm:w-2/3 lg:w-1/2 mx-auto bg-black bg-opacity-40 p-2 sm:p-10 lg:p-20 border rounded-lg '>
                <h2 className='text-3xl text-center text-white'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label htmlFor="email1" className="text-xl my-2 text-white">Email</label>
                        <input id='email1' autoComplete="email" type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full text-white" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="password1" className="text-xl my-2 text-white">Password</label>
                        <input id='password1' type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full" />

                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <button className='text-white my-4 btn btn-secondary w-full'><input type="submit" /></button>
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-2 text-white'>New to Please  <Link className='text-secondary' to="/register">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handelGoogleLogIn} className='btn btn-outline w-full text-white'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;