import React, { useState, useEffect } from 'react';
import { getWeaponDefenses } from '../services/curriculumService';
import Breadcrumb from '../components/Breadcrumb';
import { WeaponDefense } from '../types';

const YouTubeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
);

const WeaponDefenseCard: React.FC<{ defense: WeaponDefense }> = ({ defense }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md border-l-8 border-ew-gold relative">
            <div className="flex justify-between items-start mb-2">
                <div className="font-bold text-lg">
                    #{defense.id} - {defense.strike}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider bg-ew-gold text-ew-black px-2 py-1 rounded-full">{defense.weapon}</span>
            </div>
            <div className="mb-3">
                <h4 className="font-semibold text-ew-text-secondary">Defense</h4>
                <p>{defense.defense}</p>
            </div>
            <div className="mb-3">
                <h4 className="font-semibold text-ew-text-secondary">Finishing Move</h4>
                <p>{defense.finishing_move}</p>
            </div>
            {defense.video_url ? (
                <a href={defense.video_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-ew-gold text-ew-black font-bold py-2 px-4 rounded hover:bg-ew-gold-dark transition-colors">
                    <YouTubeIcon />
                    <span>Watch at {defense.video_time}</span>
                </a>
            ) : (
                <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed">
                    <YouTubeIcon />
                    <span>No Video Available</span>
                </div>
            )}
        </div>
    );
};

const WeaponDefensePage: React.FC = () => {
    const [defenses, setDefenses] = useState<WeaponDefense[]>([]);

    useEffect(() => {
        setDefenses(getWeaponDefenses());
    }, []);

    const groupedData = defenses.reduce((acc, item) => {
        const category = item.weapon || 'Uncategorized';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {} as Record<string, WeaponDefense[]>);

    const categoryOrder = ['Knife', 'Gun'];
    const orderedCategories = [...categoryOrder.filter(cat => groupedData[cat]), ...Object.keys(groupedData).filter(cat => !categoryOrder.includes(cat))];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Breadcrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Weapon Defense' }]} />
            <header className="my-8 text-center">
                <h1 className="text-3xl md:text-5xl font-heading font-black">Weapon Defense</h1>
                <p className="mt-2 text-lg text-ew-text-secondary max-w-3xl mx-auto">Weapon Self Defense demonstrates the student's ability to block and counter specific moves when being attacked with either a knife or a gun based on the studio curriculum.</p>
            </header>

            {defenses.length === 0 ? (
                <div className="text-center text-ew-text-secondary py-16">
                    <p>No weapon defense techniques have been added yet.</p>
                </div>
            ) : (
                <div className="space-y-12">
                    {orderedCategories.map(category => (
                        <section key={category}>
                            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 pb-2 border-b-2 border-ew-gold">{category} Defense</h2>
                            <div className="space-y-4">
                                {groupedData[category].map(d => (
                                    <WeaponDefenseCard key={d.id} defense={d} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WeaponDefensePage;
