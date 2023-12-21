import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-[1400px] mx-auto px-4'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;