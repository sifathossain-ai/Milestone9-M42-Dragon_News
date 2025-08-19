import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold text-lg'>Login With</h2>
            <div className='flex flex-col gap-2 my-5'>
                <button className='btn font-normal'>
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <Link to={'/auth/login'} className='btn font-normal'>
                    <FaGithub></FaGithub>
                    Login with Github
                </Link>
            </div>
        </div>
    );
};

export default SocialLogin;