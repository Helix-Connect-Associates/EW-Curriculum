
import React from 'react';
import { Link } from 'react-router-dom';

interface ComingSoonProps {
    title: string;
    description: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title, description }) => {
    return (
        <div className="text-center py-16 md:py-24 px-4">
            <div className="inline-block bg-gray-200 text-gray-500 text-5xl p-6 rounded-full mb-6">
                🔒
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-ew-coming-soon">{title}</h1>
            <p className="mt-4 max-w-2xl mx-auto text-ew-text-secondary">
                {description}
            </p>
            <div className="mt-6 inline-block bg-ew-coming-soon text-white text-sm font-bold py-2 px-4 rounded-full">
                Content Coming Soon
            </div>
            <div className="mt-8">
                <Link to="/" className="text-ew-gold-dark font-semibold hover:underline">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ComingSoon;
