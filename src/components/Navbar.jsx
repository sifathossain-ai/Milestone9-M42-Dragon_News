import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.email}</div>
            <div className="nav space-x-2 md:space-x-5 text-gray-500">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            </div>
            <div className="login flex items-center gap-2">
                <div><img src={userIcon} alt="" /></div>
                {
                    user && user.email?  <button onClick={logOut} className='text-white font-semibold btn btn-neutral border-none rounded-none px-7'>Logout</button> : <Link to={'/auth/login'} className='text-white font-semibold btn btn-neutral border-none rounded-none px-7'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;