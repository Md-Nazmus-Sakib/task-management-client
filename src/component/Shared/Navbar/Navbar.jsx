import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const myLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/project'}>Project</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-300 'max-w-[1400px] mx-auto rounded-b-xl">
                <div className="navbar-start w-96">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                myLinks
                            }
                        </ul>
                    </div>
                    <h1 className="btn btn-ghost text-lg  sm:text-2xl font-extrabold">Md. Nazmus Sakib</h1>
                </div>
                <div className="navbar-end hidden lg:flex flex-1">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {
                            myLinks
                        }

                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Navbar;