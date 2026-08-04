import React from 'react';

const LOGO_SRC = '/assets/brand/logo-96.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-ew-black text-ew-gold mt-16 border-t-8 border-ew-gold">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <img src={LOGO_SRC} alt="EastWest MMA Combat Club logo" className="h-16 w-16 object-contain mx-auto mb-4" />
                <p className="font-semibold">&copy; {new Date().getFullYear()} EastWest MMA. All rights reserved.</p>
                <p className="text-xs text-ew-gold-light opacity-80 mt-2 max-w-2xl mx-auto">
                    This site is maintained by students and is not official school curriculum. It is intended to assist you in your preparation for testing and provide supplemental information.
                </p>
            </div>
        </footer>
    );
};

export default Footer;