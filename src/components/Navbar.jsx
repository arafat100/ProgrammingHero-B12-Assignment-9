import React, { use } from 'react';
import { NavLink } from 'react-router';
import userIcon from "../assets/user-icon.jpg";
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogOut = () => {
        // console.log("user trying to LogOut");
        logOut().then(() => {
            alert("you logged out successful");
        }).catch((error) => {
            console.log(error);
        });
    }

    return (

        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/blog">Blog</NavLink>

                        <div>
                            {user &&
                                <ul>
                                    <NavLink to="/profile">My Profile</NavLink>
                                </ul>}
                        </div>
                    </ul>
                </div>
                <span className="font-bold text-xl text-[#4E47FF]">SkillSwap</span>
            </div>

            <div className="navbar-center hidden lg:flex gap-5">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to="/">Home</NavLink>
                </ul>
                <ul className="menu menu-horizontal px-1">
                    <NavLink to="/quickAction">Quick Action</NavLink>
                </ul>
                <div>
                    {user &&
                        <ul>
                            <NavLink to="/profile">My Profile</NavLink>
                        </ul>}
                </div>

            </div>

            <div className="navbar-end flex gap-3">
                <div>{user && user.email}</div>
                <img className='h-10 w-10' src={`${user ? user.photoURL
                    : userIcon}`} alt="" />

                {user ? (<button onClick={handleLogOut} className=" btn btn-primary">LogOut</button>) : (<NavLink to="/auth/login" className="btn btn-primary">Login</NavLink>)}


            </div>

        </div>
    );
};

export default Navbar;