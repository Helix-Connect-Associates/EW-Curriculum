import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { getTrainingPrograms } from '../services/trainingService';

const TrainingMenuPage: React.FC = () => {
    const programs = getTrainingPrograms();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Breadcrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Training' }]} />
            <div className="text-center mt-4">
                <h1 className="text-3xl md:text-4xl font-heading font-black">Training</h1>
                <p className="mt-2 text-lg text-ew-text-secondary max-w-2xl mx-auto">
                    Drills, challenges, and schedules to sharpen your skills outside of testing requirements.
                </p>
            </div>

            {programs.length === 0 ? (
                <p className="mt-12 text-center text-ew-text-secondary">Training programs are coming soon.</p>
            ) : (
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {programs.map(program => (
                        <Link
                            key={program.slug}
                            to={`/training/${program.slug}`}
                            className="group block p-6 bg-white border-2 border-ew-gold rounded-lg shadow-lg hover:shadow-2xl hover:border-ew-gold-dark transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-4xl leading-none">{program.icon}</div>
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-2xl font-bold font-heading text-ew-text-primary group-hover:text-ew-gold-dark transition-colors">
                                        {program.title}
                                    </h2>
                                    {program.summary && <p className="mt-1 text-ew-text-secondary">{program.summary}</p>}
                                    {program.combos.length > 0 && (
                                        <span className="mt-3 inline-block text-xs font-bold uppercase tracking-wide bg-ew-black text-ew-gold px-3 py-1 rounded-full">
                                            {program.combos.length} combos · Drill Mode
                                        </span>
                                    )}
                                </div>
                                <span className="text-3xl text-ew-gold-dark group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TrainingMenuPage;
