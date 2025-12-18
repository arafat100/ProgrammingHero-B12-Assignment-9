import React, { Suspense } from 'react';
import Login from '../components/Login';
import Cards from '../components/Cards';
import Rateds from '../components/Rateds';
import Works from '../components/Works';

const Home = () => {
    return (
        <div>
            <Login></Login>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <Cards></Cards>
            </Suspense>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <Rateds></Rateds>
            </Suspense>

            <Works></Works>



        </div>
    );
};

export default Home;