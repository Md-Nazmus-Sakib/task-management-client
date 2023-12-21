import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signUpImg from '../../../assets/Images/Login/register.jpg'

import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';



const Register = () => {
    const { setLoading, createUser, signIn, logOut, updateUserProfile, googleSignIn } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [signUpError, setSignUPError] = useState('');
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSignUp = (data) => {
        console.log(data)
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photo
                        }
                        console.log(userInfo)
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    // console.log('user added to the database')
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    setLoading(false)
                                    navigate('/')
                                }
                                else {
                                    setLoading(false)
                                    navigate('/')
                                }
                            })


                    })
                    .catch(error => {

                        setSignUPError(error.message)
                        setLoading(false)
                    })
            })
            .catch(error => {

                setSignUPError(error.message)
                setLoading(false)
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
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${signUpImg})`, backgroundSize: "cover" }} className='min-h-[800px] flex justify-center items-center px-4 py-20'>
            <div className='w-full sm:w-2/3 lg:w-1/2 mx-auto bg-black bg-opacity-40 p-2 sm:p-10 lg:p-20 border rounded-lg'>
                <h2 className='text-3xl text-center text-white'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full">
                        <label htmlFor="name" className="text-xl my-2 text-white">Name</label>
                        <input id='name' autoComplete="name" type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full text-white" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="photo" className="text-xl my-2 text-white">Photo Url</label>
                        <input id='photo' type="text" {...register("photo", {
                            required: "Photo url is Required"
                        })} className="input input-bordered w-full text-white" />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="email" className="text-xl my-2 text-white">Email</label>
                        <input id='email' autoComplete="email" type="email" {...register("email", {
                            required: "Email is Required"
                        })} className="input input-bordered w-full text-white" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="password" className="text-xl my-2 text-white">Password</label>
                        <input id='password' type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*%^])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <button className='btn btn-secondary w-full my-4  text-white'><input type="submit" /></button>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='my-4 text-white'>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handelGoogleLogIn} className='btn btn-outline w-full text-white'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Register;