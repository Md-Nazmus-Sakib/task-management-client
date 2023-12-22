import React, { useEffect, useState } from 'react';
import TaskSection from './TaskSection';

const TaskManagement = ({ allTask, taskRefetch }) => {

    const statuses = ['todo', 'ongoing', 'complete']

    const [allTodo, setAllTodo] = useState([])
    const [onGoings, setOnGoings] = useState([])
    const [completes, setCompletes] = useState([])

    useEffect(() => {
        const filterAllTodo = allTask.filter(task => task.status === 'todo');
        setAllTodo(filterAllTodo)
        const filterOnGoings = allTask.filter(task => task.status === 'ongoing');
        setOnGoings(filterOnGoings)
        const filterCompletes = allTask.filter(task => task.status === 'complete');
        setCompletes(filterCompletes)
    }, [allTask])


    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 my-12'>
            {
                statuses.map((status, index) => <TaskSection
                    key={index}
                    status={status}
                    allTodo={allTodo}
                    onGoings={onGoings}
                    completes={completes}
                    taskRefetch={taskRefetch}
                    allTask={allTask}
                >

                </TaskSection>



                )
            }

        </div>
    );
};

export default TaskManagement;