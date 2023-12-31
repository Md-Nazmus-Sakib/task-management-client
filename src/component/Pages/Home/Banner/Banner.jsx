import React from 'react';
import bannerImg from '../../../../assets/Images/Banner/banner.png'
import banner1Img from '../../../../assets/Images/Banner//ban2.png'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center mt-6 gap-4'>
                <div className='flex-1'>
                    <div className='w-full sm:w-2/3 mx-auto'>
                        <h1 className='text-3xl md:text-5xl font-extrabold'>Task Management and Lists Tool</h1>
                        <p className='my-4'>Prioritize project deadlines and allocate resources effectively for efficient task management, ensuring timely completion and optimal productivity.</p>
                        <Link to={'/dashboard'}>   <button className="btn btn-accent text-white">Let's Explore</button></Link>
                    </div>
                </div>
                <div className='w-full md:flex-1'>
                    <img className='object-fill  w-full h-60 md:h-full ' src={bannerImg} alt="" />
                </div>
            </div>
            <img src={banner1Img} alt="" />
        </div>
    );
};

export default Banner;