import React from 'react';
import TaskHeader from './TaskHeader';
import ShowTask from './ShowTask';
import { useDrop } from 'react-dnd';
import useAxiosSecret from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const TaskSection = ({ status, allTodo, onGoings, completes, taskRefetch, allTask }) => {
    const axiosSecure = useAxiosSecret();
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    let text = 'TO-Do';
    let bg = 'bg-slate-500';
    let count = allTodo
    if (status === 'ongoing') {
        text = 'Ongoing';
        bg = 'bg-purple-500'
        count = onGoings
    }
    if (status === 'complete') {
        text = 'Complete';
        bg = 'bg-green-500'
        count = completes
    }
    const addItemToSection = (id) => {
        const moveTask = { id, status }

        axiosSecure.put('/task', moveTask)
            .then(res => {

                if (res.data.modifiedCount > 0) {
                    taskRefetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Task Update Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .catch(error => console.log(error.message))
    }
    return (

        <div ref={drop} className={`${isOver ? "bg-slate-300" : ""} rounded-lg `}>

            <TaskHeader text={text} bg={bg} count={count}  ></TaskHeader>
            <div className=' '>
                {
                    count?.length > 0 && count?.map(task => <ShowTask
                        key={task._id}
                        task={task}
                        taskRefetch={taskRefetch}
                        allTask={allTask}
                    ></ShowTask>)
                }
            </div>


        </div>
    );
};

export default TaskSection;