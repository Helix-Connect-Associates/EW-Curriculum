import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getRotations, getWelcomeMessage } from '../services/curriculumService';
import { Rotation } from '../types';

interface NavTileProps {
    to: string;
    title: string;
    icon: string;
    isComingSoon?: boolean;
    children?: React.ReactNode;
}

const NavTile: React.FC<NavTileProps> = ({ to, title, icon, isComingSoon = false, children }) => {
    const content = (
        <div className={`h-full flex flex-col items-center justify-center p-6 text-center transition-all duration-300 ${isComingSoon ? 'opacity-60 grayscale' : 'hover:scale-105 hover:shadow-2xl'}`}>
            <div className="text-5xl mb-3">{icon}</div>
            <h3 className="text-2xl font-bold font-heading">{title}</h3>
            {children}
        </div>
    );

    const tileClasses = `bg-ew-white border-3 rounded-lg shadow-lg overflow-hidden min-h-[180px] ${
        isComingSoon ? 'border-ew-coming-soon cursor-not-allowed' : 'border-ew-gold'
    }`;

    return isComingSoon ? (
        <div className={tileClasses}>{content}</div>
    ) : (
        <Link to={to} className={tileClasses}>
            {content}
        </Link>
    );
};

const FormsTile: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const rotations = getRotations();
    const tileRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (tileRef.current && !tileRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={tileRef} className="bg-ew-white border-3 border-ew-gold rounded-lg shadow-lg overflow-visible min-h-[180px] relative">
            <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="text-5xl mb-3">🥋</div>
                <h3 className="text-2xl font-bold font-heading">Forms</h3>
                <p className="mt-2 text-sm text-ew-text-secondary">Select a rotation to practice your patterns.</p>
                <div className="mt-4">
                    <button
                        onClick={toggleDropdown}
                        className="bg-ew-gold text-ew-black font-bold py-2 px-4 rounded hover:bg-ew-gold-dark transition-colors focus:outline-none focus:ring-2 focus:ring-ew-gold-dark"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                    >
                        Select Rotation
                        <span className={`inline-block ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                </div>

                {isOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-ew-border rounded-lg shadow-xl z-10">
                        <ul className="py-1">
                            {rotations.map((rotation) => (
                                <li key={rotation.id}>
                                    <Link
                                        to={`/forms/${rotation.slug}`}
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-left px-4 py-2 text-sm text-ew-text-primary hover:bg-ew-gold-light transition-colors"
                                    >
                                        {rotation.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

const HomePage: React.FC = () => {
    const [welcomeMessage, setWelcomeMessage] = useState('');

    useEffect(() => {
        setWelcomeMessage(getWelcomeMessage());
    }, []);

    return (
        <div className="bg-ew-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-black text-ew-gold">EastWest MMA Curriculum</h1>
                    <p className="mt-2 text-lg text-ew-gold-light opacity-90 max-w-2xl mx-auto">Your guide to the forms, techniques, and requirements for each belt level.</p>
                </div>

                <div className="my-12 bg-ew-black text-ew-gold-light p-6 md:p-8 rounded-lg shadow-lg border-2 border-ew-gold">
                    <div className="space-y-4 text-left text-base">
                        {welcomeMessage.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FormsTile />
                    <NavTile to="/takedowns" title="Takedowns" icon="🤼">
                        <p className="mt-2 text-sm text-ew-text-secondary">Master blocks, counters, and grounding techniques.</p>
                    </NavTile>
                    <NavTile to="/onesteps" title="One Steps" icon="🥊">
                        <p className="mt-2 text-sm text-ew-text-secondary">Practice precise blocks and counters for testing.</p>
                    </NavTile>
                    <NavTile to="/breakaways" title="Breakaways" icon="🏃">
                        <p className="mt-2 text-sm text-ew-text-secondary">Learn escapes from various grabs and holds.</p>
                    </NavTile>
                    <NavTile to="/weapon-defense" title="Weapon Defense" icon="⚔️">
                        <p className="mt-2 text-sm text-ew-text-secondary">Techniques against knife and gun threats.</p>
                    </NavTile>
                    <NavTile to="/testing-requirements" title="Testing" icon="📋">
                        <p className="mt-2 text-sm text-ew-text-secondary">View belt requirements and board breaks.</p>
                    </NavTile>
                    <NavTile to="/training" title="Training" icon="💪">
                        <p className="mt-2 text-sm text-ew-text-secondary">Kickboxing combos, challenges, and training plans.</p>
                    </NavTile>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
