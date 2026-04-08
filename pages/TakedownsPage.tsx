import React, { useState, useEffect } from 'react';
import { getTakedowns } from '../services/curriculumService';
import Breadcrumb from '../components/Breadcrumb';
import { Takedown } from '../types';

const YouTubeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
);

const beltColors: { [key: string]: string } = {
    'White': 'border-gray-300', 'Yellow': 'border-belt-yellow', 'Orange': 'border-belt-orange',
    'Purple': 'border-belt-purple', 'Blue': 'border-belt-blue', 'Green': 'border-belt-green',
    'Red': 'border-belt-red', 'Brown': 'border-belt-brown', 'Black': 'border-belt-black'
};

const TakedownCard: React.FC<{ takedown: Takedown }> = ({ takedown }) => {
    return (
        <div className={`bg-white p-4 rounded-lg shadow-md border-l-8 ${beltColors[takedown.adult_belt] || 'border-gray-300'} relative`}>
            <div className="font-bold text-lg mb-2">
                #{takedown.id} - {takedown.adult_belt} Belt (Child: {takedown.child_belt})
            </div>
            <div className="mb-3">
                <h4 className="font-semibold text-ew-text-secondary">Technique (Right)</h4>
                <p>{takedown.technique_right}</p>
            </div>
            <div className="mb-3">
                <h4 className="font-semibold text-ew-text-secondary">Technique (Left)</h4>
                <p>{takedown.technique_left}</p>
            </div>
            {takedown.video_url ? (
                <a href={takedown.video_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-ew-gold text-ew-black font-bold py-2 px-4 rounded hover:bg-ew-gold-dark transition-colors">
                    <YouTubeIcon />
                    <span>Watch at {takedown.video_time}</span>
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

const TakedownsPage: React.FC = () => {
    const [takedowns, setTakedowns] = useState<Takedown[]>([]);

    useEffect(() => {
        setTakedowns(getTakedowns());
    }, []);

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

            <div className="space-y-4">
                {takedowns.map(t => <TakedownCard key={t.id} takedown={t} />)}
            </div>
        </div>
    );
};

export default TakedownsPage;
