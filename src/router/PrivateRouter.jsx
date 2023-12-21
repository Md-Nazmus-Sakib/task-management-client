import React from 'react';
;
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // console.log(location)
    if (loading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <span className="loading loading-bars loading-lg text-secondary"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return (<Navigate to={'/login'} state={{ form: location }} replace></Navigate>);
};


export default PrivateRoute;