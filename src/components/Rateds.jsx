import React, { use } from 'react';

const ratedPromise = fetch("/cardData.json")
    .then((res) => res.json());

const Rateds = () => {
    const rateds = use(ratedPromise);
    return (
        <div>
            <section className="py-12 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">
                        ⭐ Top Rated Providers
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {rateds.map((provider) => (
                            <div
                                key={provider.id}
                                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
                            >
                                <img
                                    src={provider.image}
                                    alt={provider.name}
                                    className="w-full h-40 object-cover rounded"
                                />

                                <h3 className="text-lg font-semibold mt-3">{provider.name}</h3>
                                <p className="text-sm text-gray-600">{provider.skill}</p>

                                <p className="text-yellow-500 font-semibold mt-2">
                                    ⭐ {provider.rating}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Rateds;