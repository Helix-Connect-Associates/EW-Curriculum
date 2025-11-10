
import React from 'react';
import { getOneSteps } from '../services/curriculumService';
import Breadcrumb from '../components/Breadcrumb';
import { OneStep } from '../types';

const beltColors: { [key: string]: string } = {
    'White': 'border-gray-300', 'Yellow': 'border-belt-yellow', 'Orange': 'border-belt-orange',
    'Purple': 'border-belt-purple', 'Blue': 'border-belt-blue', 'Green': 'border-belt-green',
    'Red': 'border-belt-red', 'Brown': 'border-belt-brown', 'Black': 'border-belt-black'
};

const OneStepCard: React.FC<{ onestep: OneStep }> = ({ onestep }) => (
    <div className={`bg-white p-4 rounded-lg shadow-md border-l-8 ${beltColors[onestep.belt] || 'border-gray-300'}`}>
        <div className="font-bold text-lg mb-2">
            {onestep.belt} Belt - #{onestep.number}
        </div>
        <div className="mb-3">
            <h4 className="font-semibold text-ew-text-secondary">Technique (Right)</h4>
            <p>{onestep.technique_right}</p>
        </div>
        <div className="mb-3">
            <h4 className="font-semibold text-ew-text-secondary">Technique (Left)</h4>
            <p>{onestep.technique_left}</p>
        </div>
        <a href={onestep.video_url} target="_blank" rel="noopener noreferrer" className="inline-block bg-ew-gold text-ew-black font-bold py-2 px-4 rounded hover:bg-ew-gold-dark transition-colors">
            Watch at {onestep.video_time}
        </a>
    </div>
);


const OneStepsPage: React.FC = () => {
    const onesteps = getOneSteps();
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Breadcrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'One Steps' }]} />
            <header className="my-8 text-center">
                <h1 className="text-3xl md:text-5xl font-heading font-black">One Steps</h1>
                <p className="mt-2 text-lg text-ew-text-secondary max-w-3xl mx-auto">One Steps demonstrate the student's ability to block and counter specific moves based on the studio curriculum.</p>
                <a href="https://www.youtube.com/watch?v=qldjJeRfABo" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-ew-gold text-ew-black font-bold py-2 px-6 rounded hover:bg-ew-gold-dark transition-colors">
                    Watch Full Video
                </a>
            </header>

            {/* Mobile View */}
            <div className="md:hidden space-y-4">
                {onesteps.map(o => <OneStepCard key={o.id} onestep={o} />)}
            </div>

            {/* Desktop View */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm text-left text-ew-text-secondary border-2 border-ew-gold">
                    <thead className="text-xs text-ew-gold uppercase bg-ew-black">
                        <tr>
                            <th scope="col" className="px-6 py-3">Belt Level</th>
                            <th scope="col" className="px-6 py-3">#</th>
                            <th scope="col" className="px-6 py-3">Technique (Right)</th>
                            <th scope="col" className="px-6 py-3">Start Time</th>
                            <th scope="col" className="px-6 py-3">Technique (Left)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {onesteps.map((o, index) => (
                            <tr key={o.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-ew-gold-light transition-colors`}>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">{o.belt}</td>
                                <td className="px-6 py-4">{o.number}</td>
                                <td className="px-6 py-4">{o.technique_right}</td>
                                <td className="px-6 py-4">
                                    <a href={o.video_url} target="_blank" rel="noopener noreferrer" className="font-medium text-ew-gold-dark hover:underline">
                                        {o.video_time}
                                    </a>
                                </td>
                                <td className="px-6 py-4">{o.technique_left}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OneStepsPage;
