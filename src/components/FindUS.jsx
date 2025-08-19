import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUS = () => {
    return (
        <div>
            <h2 className='font-semibold text-lg'>Find Us On</h2>
            <div className="join my-5 flex join-vertical w-full *:bg-white">
                <button className="btn font-normal text-gray-500 join-item p-6 justify-start">
                    <FaFacebook className='w-5 h-5'></FaFacebook>
                    Facebook
                </button>
                <button className="btn font-normal text-gray-500 p-6 join-item justify-start">
                    <FaTwitter className='w-5 h-5'></FaTwitter>
                    Twitter
                </button>
                <button className="btn font-normal text-gray-500 p-6 join-item justify-start">
                    <FaInstagram className='w-5 h-5'></FaInstagram>
                    Instagram
                </button>
            </div>

        </div>
    );
};

export default FindUS;