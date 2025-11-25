import React, { use } from 'react';

const stepPromise = fetch("/cardData.json")
    .then((res) => res.json());

const Works = () => {
    const steps = use(stepPromise);
    return (
        <div>
            <section className="py-12 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">
                        🚀 How It Works
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
                            >
                                <div className="text-4xl mb-3">{step.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Works;