import React, { useState } from 'react';
import { Link } from 'react-router';

const Signup = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Signed Up:", user);
        alert("Signup Successful!");
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="block font-medium mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                    Sign Up
                </button>
            </form>

            <p className="text-center mt-4 text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 cursor-pointer hover:underline">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Signup;