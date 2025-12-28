import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState("");
    const { signIn, signInWithGoogle, forgetPassword } = use(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const emailRef = useRef();
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordShow = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user
                console.log(user)
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleForgetPassword = () => {
        console.log("forget password", emailRef.current);
        const email = emailRef.current.value;
        console.log(email);
        forgetPassword(email)
            .then(() => {
                alert("please check your email");
            })

            .catch((error) => {
                console.log(error);

            });

    };


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
                navigate(`${location.state ? location.state : "/"}`)

            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorCode, errorMessage);
                setError(errorCode);
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
                                    className="input"
                                    placeholder="Email"
                                    ref={emailRef}
                                    required />

                                {/* password */}
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        className="input"
                                        placeholder="Password"
                                        required />
                                    <button onClick={handleTogglePasswordShow} className="btn-sm top-4 right-2  absolute">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
                                </div>

                                <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>

                                {error && <p className="text-red-400 text-sm">{error}</p>}
                                <button type="submit" className="btn text-white bg-blue-600 mt-4">Login</button>
                                <div onClick={handleGoogleLogIn} className=" w-full btn btn-outline hover:bg-blue-400 mt-3">
                                    <FcGoogle size={24} /> Login with Google
                                </div>
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