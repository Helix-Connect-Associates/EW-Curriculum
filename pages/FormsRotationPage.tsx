import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRotations } from '../services/curriculumService';
import Breadcrumb from '../components/Breadcrumb';
import { Form } from '../types';

const YouTubeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
);

/**
 * Splits a step string on any URLs (http/https) and returns a React node
 * where each URL is rendered as a clickable anchor tag.
 */
const renderStepContent = (step: string): React.ReactNode => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;

    if (!urlPattern.test(step)) {
        return step;
    }

    const parts = step.split(/(https?:\/\/[^\s]+)/g);

    return (
        <>
            {parts.map((part, i) =>
                /^https?:\/\//.test(part) ? (
                    <a
                        key={i}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800 break-all"
                    >
                        {part}
                    </a>
                ) : (
                    <React.Fragment key={i}>{part}</React.Fragment>
                )
            )}
        </>
    );
};

const FormCard: React.FC<{ form: Form }> = ({ form }) => {
    return (
        <article className="bg-white rounded-lg border-2 border-ew-border shadow-md overflow-hidden">
            {form.card_url && (
                <img src={form.card_url} alt={`${form.name} card`} className="w-full h-48 object-cover" />
            )}
            <div className="p-6 md:p-8">
                <header className="flex flex-wrap gap-4 justify-between items-center mb-6 pb-4 border-b border-ew-border">
                    <div>
                        <p className="text-ew-text-secondary font-semibold">{form.belt}</p>
                        <h3 className="text-2xl md:text-3xl font-bold font-heading">{form.name}</h3>
                    </div>
                    {form.video_url && (
                        <a
                            href={form.video_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#DC3545] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#C82333] transition-colors"
                        >
                            <YouTubeIcon />
                            View on YouTube
                        </a>
                    )}
                </header>
                <div className="prose max-w-none">
                    {form.steps.length > 0 ? (
                        <ol className="list-decimal pl-5 space-y-2">
                            {form.steps.map((step, index) => (
                                <li key={index}>{renderStepContent(step)}</li>
                            ))}
                        </ol>
                    ) : (
                        <p className="text-ew-text-secondary">Form steps are not available for this rotation yet.</p>
                    )}
                </div>
            </div>
        </article>
    );
};

const FormsRotationPage: React.FC = () => {
    const { rotationSlug } = useParams<{ rotationSlug: string }>();

    const allRotations = getRotations();
    const rotation = allRotations.find(r => r.slug === rotationSlug);

    if (!rotation) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-3xl font-bold">Rotation Not Found</h1>
                <p className="mt-4">The requested form rotation could not be found.</p>
                <Link to="/forms" className="mt-6 inline-block bg-ew-gold text-ew-black font-bold py-2 px-6 rounded hover:bg-ew-gold-dark transition-colors">
                    Back to Rotations
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Breadcrumb crumbs={[
                { label: 'Home', path: '/' },
                { label: 'Forms', path: '/forms' },
                { label: rotation.name }
            ]} />
            <header className="my-8 text-center">
                <h1 className="text-3xl md:text-5xl font-heading font-black">{rotation.name}</h1>
                <p className="text-xl text-ew-text-secondary mt-2">{rotation.months}</p>
            </header>

            <div className="space-y-8">
                {rotation.forms.length > 0 ? (
                    rotation.forms.map((form, index) => (
                        <FormCard
                            key={`${form.name}-${index}`}
                            form={form}
                        />
                    ))
                ) : (
                    <div className="bg-white p-8 rounded-lg border-2 border-ew-border shadow-md text-center">
                        <h2 className="text-2xl font-bold font-heading">No Forms Yet</h2>
                        <p className="mt-2 text-ew-text-secondary">There are no forms in this rotation.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FormsRotationPage;
