import React from 'react';

const Blog = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-xl font-semibold mb-6">
                Welcome to SkillSwap. By accessing or using our website, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
            </h1>

            <div className="space-y-4 text-gray-700">
                <p><strong>Acceptance of Terms:</strong> By using SkillSwap, you agree to these Terms & Conditions. If you do not agree with any part of the terms, you must not use our platform.</p>
                <p><strong>About SkillSwap</strong> SkillSwap is a platform designed to help users share, exchange, and showcase skills with others. Users can create profiles, interact with other users, and access skill-related content.</p>
                <p><strong>User Accounts:</strong> You must provide accurate and complete information when creating an account.
                    You are responsible for maintaining the confidentiality of your login credentials.
                    You are responsible for all activities that occur under your account.</p>
                <p><strong>Profile Information</strong> Users are responsible for the accuracy of their profile details.
                    SkillSwap reserves the right to remove or edit content that violates platform policies.</p>
                <p><strong>Privacy::</strong>Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.</p>
                <p><strong>Contact Us</strong> If you have any questions about these Terms & Conditions, please contact us through the SkillSwap support page.</p>
            </div>
        </div>
    );
};

export default Blog;