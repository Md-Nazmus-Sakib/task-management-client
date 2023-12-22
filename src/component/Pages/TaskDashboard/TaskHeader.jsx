import React from 'react';


const TaskHeader = ({ text, bg, count }) => {
    return (

        <div className={`card shadow-xl ${bg}`}>


            <div className="card-body">
                <div className='flex items-center gap-4 relative'>
                    <h2 className="uppercase text-white">{text}</h2>
                    <p className='bg-white absolute right-0 w-10 h-10 rounded-full flex justify-center items-center border font-bold'>{count.length}</p>
                </div>

            </div>

        </div>

    );
};

export default TaskHeader;