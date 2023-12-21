import React from 'react';
import { useForm } from 'react-hook-form';

const AddTask = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <div>


            <form>
                <div className='mx-4 flex gap-4'>
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
                <div className='mx-4 flex gap-4'>
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