import React from 'react';
import imgDashboard from '../../../assets/Images/Dashboard/dashboard.png'
import useAuth from '../../../Hooks/useAuth';
import AddTask from './AddTask';

const TaskDashboard = () => {
    const { user } = useAuth();
    return (
        <div className='grid grid-cols-3 bg-slate-200 '>
            <div className='col-span-2'>
                <div className='flex justify-center items-center h-72 m-6 border  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg '>
                    <div className='text-white'>
                        <h1 className='text-3xl font-extrabold'>Welcome </h1>
                        <p className='text-xl font-bold my-4'>{user?.displayName}</p>
                        <p>Task Management and lists tools.</p>
                    </div>
                    <div className=' col-span-1'>
                        <img className='w-full h-72' src={imgDashboard} alt="" />
                    </div>

                </div>
                <div className=''>
                    <AddTask></AddTask>
                </div>
            </div>
            <div className='bg-white rounded-tl-lg p-8 '>
                <h2 className='text-xl font-semibold'>Profile</h2>
                <div className='flex justify-center my-6'>

                    <div className='flex justify-center items-center flex-col'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <h2 className='text-xl my-4'>Name: {user?.displayName}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDashboard;