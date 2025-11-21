
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useGuest } from '../contexts/GuestContext';

const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/forms', text: 'Forms' },
    { to: '/takedowns', text: 'Takedowns' },
    { to: '/onesteps', text: 'One Steps' },
    { to: '/breakaways', text: 'Breakaways' },
    { to: '/weapon-defense', text: 'Weapon Defense' },
    { to: '/testing-requirements', text: 'Testing' },
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { guestName } = useGuest();

    const linkClasses = "block py-2 px-3 text-ew-gold hover:text-ew-gold-light md:p-0 transition-colors";
    const activeLinkClasses = "text-ew-gold-light font-bold";

    return (
        <header className="bg-ew-black border-b-4 border-ew-gold sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <NavLink to="/" className="text-ew-gold hover:text-ew-gold-light transition-colors z-20">
                        <div className="flex items-baseline">
                            <h1 className="text-2xl md:text-3xl font-heading font-black tracking-tighter">EastWest MMA</h1>
                            <span className="ml-2 text-sm md:text-base font-body text-ew-gold-light opacity-80 hidden sm:inline">Curriculum</span>
                        </div>
                    </NavLink>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                             <NavLink key={link.to} to={link.to} className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                                {link.text}
                            </NavLink>
                        ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                        {guestName && guestName !== 'Student' && (
                            <div className="hidden lg:block text-ew-gold text-sm border border-ew-gold px-3 py-1 rounded-full">
                                <span className="opacity-70">Training: </span>
                                <span className="font-bold">{guestName}</span>
                            </div>
                        )}
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-ew-gold text-3xl focus:outline-none z-20" aria-label="Open mobile navigation menu">
                            {isMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 bg-ew-black bg-opacity-95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-10 pt-24`}>
                 <div className="flex flex-col items-center py-4 space-y-6">
                    {guestName && (
                        <div className="text-ew-gold-light mb-4 font-heading text-xl">
                            Welcome, {guestName}
                        </div>
                    )}
                    {navLinks.map(link => (
                         <NavLink key={link.to} to={link.to} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''} text-2xl`}>
                            {link.text}
                        </NavLink>
                    ))}
                 </div>
            </div>
        </header>
    );
};

export default Header;