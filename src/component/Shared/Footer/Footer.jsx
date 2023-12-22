import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white pb-20">

            <div className='sm:flex justify-evenly w-full'>
                <div className='flex flex-col sm:flex-row justify-center items-center '>

                    <h1 className="font-bold text-3xl">
                        Task Management <br />
                        <span className='text-xl'>Providing reliable Task Management 2023</span>
                    </h1>

                </div>


                <nav>
                    <h1 className='text-2xl border-b-2 mb-4'>Follow Us</h1>
                    <div className="grid grid-flow-col gap-4 text-xl">
                        <a href="https://twitter.com/"><FaTwitter></FaTwitter></a>
                        <a href="https://www.youtube.com/"><FaYoutube></FaYoutube></a>
                        <a href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>

                    </div>

                </nav>
            </div>
            <p>Copyright © 2023 - All right reserved</p>
        </footer>
    );
};

export default Footer;