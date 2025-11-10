
import React from 'react';
import { getTakedowns } from '../services/curriculumService';
import Breadcrumb from '../components/Breadcrumb';
import { Takedown } from '../types';

const beltColors: { [key: string]: string } = {
    'White': 'border-gray-300', 'Yellow': 'border-belt-yellow', 'Orange': 'border-belt-orange',
    'Purple': 'border-belt-purple', 'Blue': 'border-belt-blue', 'Green': 'border-belt-green',
    'Red': 'border-belt-red', 'Brown': 'border-belt-brown', 'Black': 'border-belt-black'
};

const TakedownCard: React.FC<{ takedown: Takedown }> = ({ takedown }) => (
    <div className={`bg-white p-4 rounded-lg shadow-md border-l-8 ${beltColors[takedown.adult_belt] || 'border-gray-300'}`}>
        <div className="font-bold text-lg mb-2">
            {takedown.adult_belt} Belt (Child: {takedown.child_belt})
        </div>
        <div className="mb-3">
            <h4 className="font-semibold text-ew-text-secondary">Technique (Right)</h4>
            <p>{takedown.technique_right}</p>
        </div>
        <div className="mb-3">
            <h4 className="font-semibold text-ew-text-secondary">Technique (Left)</h4>
            <p>{takedown.technique_left}</p>
        </div>
        <a href={takedown.video_url} target="_blank" rel="noopener noreferrer" className="inline-block bg-ew-gold text-ew-black font-bold py-2 px-4 rounded hover:bg-ew-gold-dark transition-colors">
            Watch at {takedown.video_time}
        </a>
    </div>
);

const TakedownsPage: React.FC = () => {
    const takedowns = getTakedowns();
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Breadcrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Takedowns' }]} />
            <header className="my-8 text-center">
                <h1 className="text-3xl md:text-5xl font-heading font-black">Takedowns</h1>
                <p className="mt-2 text-lg text-ew-text-secondary max-w-3xl mx-auto">Takedowns demonstrate the student's ability to block and counter specific moves based on the studio curriculum including grounding their opponent.</p>
                 <a href="https://youtu.be/ptK4dI78_LA" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-ew-gold text-ew-black font-bold py-2 px-6 rounded hover:bg-ew-gold-dark transition-colors">
                    Watch Full Video
                </a>
            </header>

            {/* Mobile View */}
            <div className="md:hidden space-y-4">
                {takedowns.map(t => <TakedownCard key={t.id} takedown={t} />)}
            </div>
            
            {/* Desktop View */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm text-left text-ew-text-secondary border-2 border-ew-gold">
                    <thead className="text-xs text-ew-gold uppercase bg-ew-black">
                        <tr>
                            <th scope="col" className="px-6 py-3">Child Belt</th>
                            <th scope="col" className="px-6 py-3">Adult Belt</th>
                            <th scope="col" className="px-6 py-3">Technique (Right)</th>
                            <th scope="col" className="px-6 py-3">Start</th>
                            <th scope="col" className="px-6 py-3">Technique (Left)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {takedowns.map((t, index) => (
                            <tr key={t.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-ew-gold-light transition-colors`}>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">{t.child_belt}</td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">{t.adult_belt}</td>
                                <td className="px-6 py-4">{t.technique_right}</td>
                                <td className="px-6 py-4">
                                    <a href={t.video_url} target="_blank" rel="noopener noreferrer" className="font-medium text-ew-gold-dark hover:underline">
                                        {t.video_time}
                                    </a>
                                </td>
                                <td className="px-6 py-4">{t.technique_left}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TakedownsPage;
