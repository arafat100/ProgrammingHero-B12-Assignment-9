import React, { use } from 'react';

const stepPromise = fetch("/cardData.json")
    .then((res) => res.json());

const Works = () => {
    const steps = use(stepPromise);
    return (
        <div>
            <section class="bg-blue-500 text-white py-16">
                <div class="text-center max-w-2xl mx-auto px-4">
                    <h2 class="text-3xl font-bold mb-4">How It Works</h2>
                    <p class="text-white/90">
                        A simple breakdown of how our signup and learning system works.
                    </p>
                </div>
            </section>

            <section class="bg-gray-100 py-16">
                <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">


                    <div class="bg-white rounded-xl shadow p-8 text-center">
                        <div class="w-12 h-12 mx-auto flex items-center justify-center text-lg font-semibold bg-gray-100 rounded-xl mb-4">
                            1
                        </div>
                        <h3 class="text-lg font-semibold mb-2">Create Account</h3>
                        <p class="text-gray-600 text-sm">
                            Sign up using email and basic details to get started.
                        </p>
                    </div>


                    <div class="bg-white rounded-xl shadow p-8 text-center">
                        <div class="w-12 h-12 mx-auto flex items-center justify-center text-lg font-semibold bg-gray-100 rounded-xl mb-4">
                            2
                        </div>
                        <h3 class="text-lg font-semibold mb-2">Complete Profile</h3>
                        <p class="text-gray-600 text-sm">
                            Add your information so providers can understand your needs.
                        </p>
                    </div>


                    <div class="bg-white rounded-xl shadow p-8 text-center">
                        <div class="w-12 h-12 mx-auto flex items-center justify-center text-lg font-semibold bg-gray-100 rounded-xl mb-4">
                            3
                        </div>
                        <h3 class="text-lg font-semibold mb-2">Browse Skills</h3>
                        <p class="text-gray-600 text-sm">
                            Explore available skills & select the one you want to learn.
                        </p>
                    </div>


                    <div class="bg-white rounded-xl shadow p-8 text-center">
                        <div class="w-12 h-12 mx-auto flex items-center justify-center text-lg font-semibold bg-gray-100 rounded-xl mb-4">
                            4
                        </div>
                        <h3 class="text-lg font-semibold mb-2">Book a Session</h3>
                        <p class="text-gray-600 text-sm">
                            Choose your preferred provider & secure your learning slot.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Works;