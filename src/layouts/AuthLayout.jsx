import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div className='w-11/12 py-4 mx-auto h-screen'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 py-5 mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer className='max-h-screen '>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;