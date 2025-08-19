import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="nav space-x-2 md:space-x-5 text-gray-500">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            </div>
            <div className="login flex items-center gap-2">
                <div><img src={userIcon} alt="" /></div>
                <Link to={'/auth/login'} className='text-white font-semibold btn btn-neutral border-none rounded-none px-7'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;