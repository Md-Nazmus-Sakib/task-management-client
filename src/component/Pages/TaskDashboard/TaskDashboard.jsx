import React from 'react';
import imgDashboard from '../../../assets/Images/Dashboard/dashboard.png'
import useAuth from '../../../Hooks/useAuth';
import AddTask from './AddTask';
import TaskManagement from './TaskManagement';
import useTask from '../../../Hooks/useTask';

const TaskDashboard = () => {
    const { user } = useAuth();
    const [allTask, taskLoading, taskRefetch] = useTask();
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 bg-slate-200 py-12'>
            <div className='col-span-2  order-2 md:order-1'>
                <div className='sm:flex justify-center items-center sm:h-72 m-6 border  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg '>
                    <div className='text-white text-center ml-4'>
                        <h1 className='text-3xl font-extrabold'>Welcome </h1>
                        <p className='text-xl font-bold my-4'>{user?.displayName}</p>
                        <p>Task Management and lists tools.</p>
                    </div>
                    <div className=' col-span-1'>
                        <img className='w-full h-72' src={imgDashboard} alt="" />
                    </div>

                </div>
                <div className=''>
                    <AddTask taskRefetch={taskRefetch}></AddTask>
                </div>
                <TaskManagement allTask={allTask} taskRefetch={taskRefetch}></TaskManagement>
            </div>
            <div className='bg-white rounded-tl-lg p-8 order-1 md:order-2 '>
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