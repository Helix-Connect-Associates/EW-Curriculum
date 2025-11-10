
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRotations, resetCurriculum } from '../services/curriculumService';

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
    const node = useRef<HTMLDivElement>(null);
    const rotations = getRotations();

    const handleClickOutside = (e: MouseEvent) => {
        if (node.current?.contains(e.target as Node)) {
            return;
        }
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={node} className="relative bg-ew-white border-3 border-ew-gold rounded-lg shadow-lg overflow-hidden min-h-[180px]">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full h-full flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-ew-gold">
                <div className="text-5xl mb-3">📋</div>
                <h3 className="text-2xl font-bold font-heading">Forms</h3>
                <span className="text-sm text-ew-text-secondary">Click to select rotation ▼</span>
            </button>
            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-ew-black text-ew-gold p-4 z-10 flex flex-col justify-center animate-fade-in">
                    {rotations.map(r => (
                        <Link key={r.id} to={`/forms/${r.slug}`} className="block text-center py-2 text-lg hover:bg-ew-gold hover:text-ew-black rounded transition-colors">
                            {r.name.split(':')[0]}
                            <span className="block text-xs opacity-70">{r.months}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

const HomePage: React.FC = () => {
    const handleReset = () => {
        if (window.confirm("Are you sure you want to reset all curriculum data to the default? Any changes you have made will be lost.")) {
            resetCurriculum();
            window.location.reload();
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <section className="max-w-4xl mx-auto mb-12 p-6 md:p-8 bg-white border-2 border-ew-gold rounded-lg shadow-md">
                <h2 className="text-3xl font-heading font-black text-center mb-4">Welcome to EastWest MMA</h2>
                <div className="space-y-4 text-ew-text-secondary text-base leading-relaxed">
                    <p>Welcome to the EastWest MMA curriculum site. The purpose of this site is to provide students additional resources to help them with the curriculum of the school. The information on this site is maintained by students of the school and is NOT considered the official school curriculum. Instead, it is intended to assist you in your preparation for testing and provide you supplemental information based on the experience of many of the Black Belts that have successfully made it through the program.</p>
                    <p>If you find anything on this site that is inaccurate, please let the site administrators know and they will research it and make the appropriate changes. Additionally, if you have ideas on how to make it better, please let them know as well.</p>
                    <p>Testing happens four times per year in March, June, September and December with September being and possibly March being Black Belt testing rotations.</p>
                    <p>All Black Belts under 1st degree or those testing for 2nd Degree and higher that are testing for a new grade, are expected to participate in the September testing.</p>
                </div>
                 <div className="text-center mt-6 pt-4 border-t border-ew-border">
                    <button onClick={handleReset} className="text-sm text-ew-error hover:underline font-semibold">
                        Reset Curriculum to Default
                    </button>
                </div>
            </section>

            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <FormsTile />
                    <NavTile to="/takedowns" title="Takedowns" icon="🥋" />
                    <NavTile to="/onesteps" title="One Steps" icon="🥊" />
                    <NavTile to="/breakaways" title="Breakaways" icon="🔒" isComingSoon={true} />
                    <NavTile to="/weapon-defense" title="Weapon Defense" icon="🛡️" isComingSoon={true} />
                    <NavTile to="/testing-requirements" title="Testing" icon="📝" />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
