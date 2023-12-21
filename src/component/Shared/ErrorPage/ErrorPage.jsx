import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen text-center'>
            <div>
                <h1 className='text-9xl text-pink-600 font-extrabold'>Oops !!!!!!!</h1>
                <p className='text-5xl text-pink-600 mt-10'>Page Not Found</p>
            </div>
        </div>
    );
};

export default ErrorPage;
