import React from 'react';
import { useForm } from 'react-hook-form';

const TaskEditModal = ({ editTask, handleEditTask, handelClose }) => {
    // console.log(editTask.title)
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-[95%] md:w-1/2 max-w-5xl ">
                    <h1 className='text-3xl font-semibold text-center my-8'>Edit Task</h1>
                    <form onSubmit={handleSubmit(handleEditTask)}>
                        <div className="form-control w-full">
                            <label htmlFor="title" className="text-xl my-2">Title</label>
                            <input id='title' autoComplete="title" type="text" defaultValue={editTask?.title} {...register("title", {
                                required: "Title is Required"
                            })} className="input input-bordered w-full " />
                            {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label htmlFor="description11" className="text-xl my-2 ">Description</label>
                            <input id='description11' autoComplete="description" type="text" defaultValue={editTask?.description} {...register("description", {
                                required: "Description is Required"
                            })} className="input input-bordered w-full " />
                            {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                        </div>


                        <div className="form-control w-full my-6">
                            <label htmlFor="priority11" className="text-xl my-2">Priority</label>
                            <select id='priority11' defaultValue={editTask?.priority} {...register('priority', { required: 'Priority field is required' })}
                                className="select select-bordered w-full">
                                <option value='' disabled hidden>Choose Priority</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                            {errors.priority && <p className='text-red-500'>{errors.priority.message}</p>}
                        </div>
                        <div className="form-control w-full my-6">
                            <label htmlFor="deadline11" className="text-xl my-2 ">Deadline</label>
                            <input id='deadline11' type="date" defaultValue={editTask?.deadline}  {...register("deadline", {
                                required: "deadline is Required"
                            })} className="input input-bordered w-full " />
                            {errors.deadline && <p className='text-red-500'>{errors.deadline.message}</p>}
                        </div>

                        <div className="modal-action">
                            <input type='submit' defaultValue={"update"} className='open-modal' />
                        </div>
                    </form>
                    <button onClick={handelClose} className="btn bg-orange-500 text-white">Close!</button>
                </div>
            </dialog>
        </>
    );
};

export default TaskEditModal;