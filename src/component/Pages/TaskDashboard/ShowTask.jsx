import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { FaBookOpen, FaFolderOpen, FaRegFileAlt, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecret from '../../../Hooks/useAxiosSecure';
import TaskEditModal from './TaskEditModal';

const ShowTask = ({ task, taskRefetch, allTask }) => {
    const axiosSecure = useAxiosSecret();
    const [editTask, setEditTask] = useState({});
    // console.log(editTask)
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    const handelEdit = (id) => {
        // console.log(id)

        const editable = allTask.find(item => item._id === id)

        // console.log(editable)
        setEditTask(editable)
        document.getElementById('my_modal_5').showModal()
    }

    const handleEditTask = () => {

    }



    const handelClose = () => {
        setEditTask({})
        document.getElementById('my_modal_5').close()

    }

    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/task/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            taskRefetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Task has been deleted.',
                                'success'
                            )
                        }

                    })
                    .catch(error => console.log(error))
            }
        })
    }
    return (
        <div >
            <div ref={drag} className={`${isDragging ? "opacity-25" : "opacity-100"} bg-slate-400 text-white p-4 shadow-xl my-4 cursor-grab rounded-xl`}>
                <h2 className=" text-md font-bold">{task?.title}</h2>
                <h2 >{task?.description}</h2>
                <h2 >{task?.priority}</h2>
                <h2 className="">{task?.deadline}</h2>

                <button onClick={() => handelEdit(task?._id)} className="tooltip text-orange-600 p-4 text-xl" data-tip="Edit"><FaRegFileAlt /></button>
                <button className="tooltip text-indigo-600 p-4 text-xl" data-tip="Details"><FaBookOpen /></button>
                <button onClick={() => handelDelete(task?._id)} className="tooltip text-red-600 p-4 text-xl" data-tip="Delete"><FaTrashAlt /></button>


            </div>
            <TaskEditModal editTask={editTask} handleEditTask={handleEditTask} handelClose={handelClose}></TaskEditModal>
        </div>
    );
};

export default ShowTask;
