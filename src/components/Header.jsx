import React from 'react';
import logo from "../assets/logo.png";
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-5 space-y-2'>
            <div className='logo'>
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='font-semibold'>{moment
            ().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;