
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-ew-black text-ew-gold mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <p className="font-semibold">&copy; {new Date().getFullYear()} EastWest MMA. All rights reserved.</p>
                <p className="text-xs text-ew-gold-light opacity-70 mt-2 max-w-2xl mx-auto">
                    This site is maintained by students and is not official school curriculum. It is intended to assist you in your preparation for testing and provide supplemental information.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
