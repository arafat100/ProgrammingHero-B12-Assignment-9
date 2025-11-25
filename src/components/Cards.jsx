import React, { use, useState } from 'react';
const cardPromise = fetch("/cardData.json")
    .then((res) => res.json());

const Cards = () => {

    const [openId, setOpenId] = useState(null);
    const handleViewDetails = (id) => {
        setOpenId(openId === id ? null : id)
    };

    console.log(cardPromise);
    const cards = use(cardPromise);
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {cards.map((skill) => (
                    <div key={skill.skillId} className="bg-white shadow p-4 rounded-lg">
                        <img src={skill.image} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-xl font-semibold mt-3">{skill.skillName}</h2>
                        <p className="text-sm text-gray-600">By: {skill.rating}</p>
                        <p className="text-sm text-gray-500">${skill.price}</p>
                        <button
                            onClick={() => handleViewDetails(skill.skillId)}
                            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            {openId === skill.skillId ? "Hide Details" : "View Details"}
                        </button>
                        {openId === skill.skillId && (
                            <div className="mt-3 text-sm text-gray-700 bg-gray-100 p-3 rounded">
                                <p><strong>Category:</strong> {skill.category}</p>
                                <p><strong>Description:</strong> {skill.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;