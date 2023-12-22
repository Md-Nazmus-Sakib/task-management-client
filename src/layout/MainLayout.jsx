import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Shared/Navbar/Navbar';
import Footer from '../component/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-[1400px] mx-auto px-4'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;