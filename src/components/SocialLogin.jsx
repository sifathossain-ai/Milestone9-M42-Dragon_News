import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold text-lg'>Login With</h2>
            <div className='flex flex-col gap-2 my-5'>
                <button className='btn font-normal'>
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className='btn font-normal'>
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;