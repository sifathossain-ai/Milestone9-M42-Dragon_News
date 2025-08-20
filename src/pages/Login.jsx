import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { logIn, setUser } = useContext(AuthContext);
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ email, password });

        logIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => {
                alert(error.code);
            })
    }
    return (
        <div className='flex justify-center items-center py-12'>
            <div className="card md:p-10 bg-base-100 w-full max-w-lg shrink-0 rounded-sm">
                <h2 className='text-2xl font-semibold text-center pt-8'>Login your account</h2>
                <form onSubmit={handleLoginSubmit}  className="card-body">
                    <div className='divider'></div>
                    <div className="form-control space-y-2 flex flex-col">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input name='email' type="email" placeholder="Enter your email" className="input input-bordered w-full border-none bg-gray-200" required />
                    </div>
                    <div className="form-control pt-4 space-y-2 flex flex-col">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="Enter your password" className="input border-none input-bordered w-full bg-gray-200" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn w-full bg-gray-700 text-white"><NavLink to={'/'}>Login</NavLink></button>
                    </div>
                    <p className='text-center py-5 text-gray-500'>Dont’t Have An Account ? <NavLink className="text-red-600 font-semibold" to={'/auth/register'}>Register</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Login;