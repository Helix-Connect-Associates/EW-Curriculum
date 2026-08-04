
import React from 'react';
import { Link } from 'react-router-dom';
import { getRotations, getCurrentRotationId } from '../services/curriculumService';
import Breadcrumb from '../components/Breadcrumb';

const FormsMenuPage: React.FC = () => {
    const rotations = getRotations();
    const currentRotationId = getCurrentRotationId();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Breadcrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Forms' }]} />
            <div className="text-center mt-4">
                <h1 className="text-3xl md:text-4xl font-heading font-black">Forms Rotations</h1>
                <p className="mt-2 text-lg text-ew-text-secondary max-w-2xl mx-auto">Forms are different based on the testing rotation. Select the rotation below to see the forms related to them.</p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {rotations.map(rotation => {
                    const isCurrent = rotation.id === currentRotationId;
                    return (
                        <Link
                            key={rotation.id}
                            to={`/forms/${rotation.slug}`}
                            className={`group relative block p-6 bg-white border-2 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${isCurrent ? 'border-ew-gold-dark ring-2 ring-ew-gold' : 'border-ew-gold hover:border-ew-gold-dark'}`}
                            aria-label={`View ${rotation.name}${isCurrent ? ' (current rotation)' : ''}`}
                        >
                            {isCurrent && (
                                <span className="absolute -top-3 left-4 bg-ew-gold text-ew-black text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow">
                                    Current Rotation
                                </span>
                            )}
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-2xl font-bold font-heading text-ew-text-primary group-hover:text-ew-gold-dark transition-colors">{rotation.name.split(':')[0]}</h2>
                                    <p className="text-ew-text-secondary">{rotation.months}</p>
                                </div>
                                <span className="text-3xl text-ew-gold-dark group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default FormsMenuPage;
