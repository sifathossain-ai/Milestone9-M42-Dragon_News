import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex justify-center items-center py-12'>
            <div className="card md:p-10 bg-base-100 w-full max-w-lg shrink-0 rounded-sm">
                <h2 className='text-2xl font-semibold text-center pt-8'>Register your account</h2>
                <form className="card-body">
                    <div className='divider'></div>
                    <div className="form-control space-y-2 flex flex-col">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered w-full border-none bg-gray-200" required />
                    </div>

                    <div className="form-control pt-4 space-y-2 flex flex-col">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your photo URL" className="input input-bordered w-full border-none bg-gray-200" required />
                    </div>

                    <div className="form-control py-4 space-y-2 flex flex-col">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input type="email" placeholder="Enter your email" className="input input-bordered w-full border-none bg-gray-200" required />
                    </div>
                    <div className="form-control space-y-2 flex flex-col">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" className="input border-none input-bordered w-full bg-gray-200" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn w-full bg-gray-700 text-white">Register</button>
                    </div>
                    <p className='text-center py-5 text-gray-500'>Do You Have An Account ? <NavLink className="text-red-600 font-semibold" to={'/auth/login'}>Login</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Register;