import React, { use, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';


const Profile = () => {
    const { user, loading } = use(AuthContext);
    const navigate = useNavigate();
    console.log(user);

    useEffect(() => {
        if (!loading && !user) {
            navigate("/auth/login");
        }
    });
    return (
        <div>
            {/* <h1>Name:{user && user.displayName}</h1>
            <p>Email:{user && user.email}</p>
            <img src={use && user.photoURL} alt="" /> */} <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
                <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6 text-center">

                    {/* User Image */}
                    <div className="flex justify-center mb-4">
                        <img
                            src={user.photoURL || "https://i.ibb.co/2kR6zq0/user.png"}
                            alt="User"
                            className="w-28 h-28 rounded-full object-cover border-4 border-blue-500"
                        />
                    </div>

                    {/* User Info */}
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {user.displayName || "No Name Found"}
                    </h2>
                    <p className="text-gray-500 mt-1">{user.email}</p>

                    {/* Divider */}
                    <div className="border-t my-5"></div>

                    {/* Update Button */}
                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
                    >
                        Update Profile
                    </button>
                </div>
            </div>



        </div>
    );
};

export default Profile;