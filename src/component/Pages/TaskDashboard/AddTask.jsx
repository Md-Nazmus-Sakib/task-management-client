import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecret from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddTask = ({ taskRefetch }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecret();
    const handelAddTask = (data) => {
        const task = { ...data, status: 'todo' }

        console.log(task)

        axiosSecure.post('/task', task)
            .then(res => {

                if (res.data.insertedId) {
                    reset()
                    taskRefetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Task Added Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .catch(error => console.log(error.message))

    }




    return (
        <div>
            <h2 className='text-3xl font-semibold text-center my-4'>Add Task</h2>

            <form onSubmit={handleSubmit(handelAddTask)}>
                <div className='mx-4 sm:flex gap-4'>
                    <div className="form-control w-full">
                        <label htmlFor="title" className="text-xl my-2">Title</label>
                        <input id='title' autoComplete="title" type="text" {...register("title", {
                            required: "Title is Required"
                        })} className="input input-bordered w-full " />
                        {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="description" className="text-xl my-2 ">Description</label>
                        <input id='description' autoComplete="description" type="text" {...register("description", {
                            required: "Title is Required"
                        })} className="input input-bordered w-full " />
                        {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                    </div>
                </div>
                <div className='mx-4 sm:flex gap-4'>
                    <div className="form-control w-full my-6">
                        <label htmlFor="priority" className="text-xl my-2">Priority</label>
                        <select id='priority' defaultValue="" {...register('priority', { required: 'Priority field is required' })}
                            className="select select-bordered w-full">
                            <option value='' disabled hidden>Choose Priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        {errors.priority && <p className='text-red-500'>{errors.priority.message}</p>}
                    </div>
                    <div className="form-control w-full my-6">
                        <label htmlFor="deadline" className="text-xl my-2 ">Deadline</label>
                        <input id='deadline' type="date" {...register("deadline", {
                            required: "deadline is Required"
                        })} className="input input-bordered w-full " />
                        {errors.deadline && <p className='text-red-500'>{errors.deadline.message}</p>}
                    </div>
                </div>
                <div className='flex justify-center'><input className='btn btn-accent ' type="submit" /></div>
                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
            </form>


        </div>
    );
};

export default AddTask;