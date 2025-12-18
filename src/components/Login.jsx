import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { signIn } = use(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password })
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            });

    };




    return (
        <div>
            <div className="hero bg-base-200  ">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin} className="fieldset">
                                {/* Email */}
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input" placeholder="Email" />

                                {/* password */}
                                <label className="label">Password</label>
                                <input
                                    name="password"
                                    type="password" className="input" placeholder="Password" />

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type="submit" className="btn text-white bg-blue-600 mt-4">Login</button>
                                <p className="text-center mt-4 text-sm">
                                    Don't have an account?
                                    <Link to="/auth/signup" className="text-blue-600 cursor-pointer hover:underline">
                                        Sign up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; 