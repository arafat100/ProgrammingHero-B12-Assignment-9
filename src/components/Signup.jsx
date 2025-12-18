import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Signup = () => {
    const { createUser, setUser } = use(AuthContext);

    // const [user, setUser] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    // });

    // const handleChange = (e) => {
    //     setUser({ ...user, [e.target.name]: e.target.value });
    // };

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
                setUser(user);
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
                                // value={user.name}
                                // onChange={handleChange}
                                // className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring"
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
                                // value={user.photo}
                                // onChange={handleChange}
                                // className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring"
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
                                // value={user.email}
                                // onChange={handleChange}
                                // className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring"
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
                                // value={user.password}
                                // onChange={handleChange}
                                // className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring"
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