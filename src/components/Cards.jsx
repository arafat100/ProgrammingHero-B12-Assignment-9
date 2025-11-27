import React, { use } from 'react';
import { Link } from 'react-router';
const cardPromise = fetch("/cardData.json")
    .then((res) => res.json());

const Cards = () => {

    console.log(cardPromise);
    const cards = use(cardPromise);
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {cards.map((card) => (
                    <div key={card.skillId} className="bg-white shadow p-4 rounded-lg">
                        <img src={card.image} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-xl font-semibold mt-3">{card.skillName}</h2>
                        <p className="text-sm text-gray-600 py-2">By: {card.rating}</p>
                        <p className="text-sm text-gray-500 py-2">${card.price}</p>
                        <Link
                            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            to="/details"
                        >
                            <span>View Details</span>

                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;