import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p className="text-center mt-4 text-sm">
                                    Don't have an account?
                                    <Link to="/signup" className="text-blue-600 cursor-pointer hover:underline">
                                        Sign up
                                    </Link>
                                </p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; 