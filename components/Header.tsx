
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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

    const linkClasses = "block py-2 px-3 text-ew-gold hover:text-ew-gold-light md:p-0 transition-colors";
    const activeLinkClasses = "text-ew-gold-light font-bold";

    return (
        <header className="bg-ew-black border-b-4 border-ew-gold sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <NavLink to="/" className="text-ew-gold hover:text-ew-gold-light transition-colors">
                        <div className="flex items-baseline">
                            <h1 className="text-2xl md:text-3xl font-heading font-black tracking-tighter">EastWest MMA</h1>
                            <span className="ml-2 text-sm md:text-base font-body text-ew-gold-light opacity-80">Curriculum</span>
                        </div>
                    </NavLink>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                             <NavLink key={link.to} to={link.to} className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                                {link.text}
                            </NavLink>
                        ))}
                    </div>
                    
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-ew-gold text-3xl focus:outline-none" aria-label="Open mobile navigation menu">
                        ☰
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-ew-black bg-opacity-95 backdrop-blur-sm`}>
                 <div className="flex flex-col items-center py-4 space-y-2">
                    {navLinks.map(link => (
                         <NavLink key={link.to} to={link.to} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''} text-lg`}>
                            {link.text}
                        </NavLink>
                    ))}
                 </div>
            </div>
        </header>
    );
};

export default Header;