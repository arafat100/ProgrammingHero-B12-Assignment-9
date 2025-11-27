import React, { use, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router';

import { toast, ToastContainer } from 'react-toastify';

const detailsPromise = fetch("/cardData.json")
    .then((res) => res.json());

const Details = () => {

    const details = use(detailsPromise);
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);


    // useEffect(() => {
    //     if (!loggedIn) navigate("/login");
    // }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        toast({
            title: "Booking Success!",
            description: "Your session request has been submitted!",
            variant: "default"
        });

        e.target.reset();
    };

    return (
        <div className="max-w-5xl mx-auto p-6">


            <h1 className="text-2xl font-bold mb-6">Available Skills</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {details.map(detail => (
                    <div key={detail.skillId} className="bg-white shadow rounded-xl p-4">
                        <img src={detail.image} className="w-full h-40 object-cover rounded" alt="" />

                        <h2 className="text-lg font-semibold mt-3">{detail.skillName}</h2>


                        <div className="text-sm text-gray-600 mt-2 space-y-1">
                            <p><strong>Provider:</strong> {detail.providerName}</p>
                            <p><strong>Email:</strong> {detail.providerEmail}</p>
                            <p><strong>Price:</strong> ${detail.price}</p>
                            <p><strong>Rating:</strong> <FaStar /> {detail.rating}</p>
                            <p><strong>Slots:</strong> {detail.slotsAvailable}</p>
                            <p><strong>Category:</strong> {detail.category}</p>
                            <p>{detail.description}</p>
                        </div>
                    </div>
                ))}
            </div>


            <div className="mt-12 bg-gray-100 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Book Session</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="p-3 rounded border w-full"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="p-3 rounded border w-full"
                        required
                    />

                    <button onSubmit={handleSubmit} className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center" type="submit">Submit</button>
                    <ToastContainer></ToastContainer>
                </form>
            </div>
        </div>
    );
};

export default Details;