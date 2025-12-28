import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
    const { createUser, setUser, updateUser, signInWithGoogle } = use(AuthContext);
    const navigate = useNavigate;

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user
                console.log(user)
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, photo, email, password });
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });

        alert("Signup Successful!");
    };

    return (
        <div className="hero bg-base-200">
            <div className=" hero-content flex-col  ">
                <div className="text-center lg:text-left">
                    <h2 className="text-5xl font-bold">Create an Account</h2>
                </div>


                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">

                        <div>
                            <label className=" block font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                className="input"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label className=" block font-medium mb-1">Photo URl</label>
                            <input
                                type="text"
                                name="photo"
                                className="input"
                                placeholder="photo URl"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="input"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white mt-2 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div onClick={handleGoogleSignIn} className=" w-auto mx-6 btn btn-outline hover:bg-blue-400 mb-2"><FcGoogle size={24} /> Sign Up with Google
                    </div>
                    <p className="text-center text-sm pb-6">
                        Already have an account?{" "}
                        <Link to="/auth/login" className="text-blue-600 cursor-pointer hover:underline">
                            Login
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Signup;