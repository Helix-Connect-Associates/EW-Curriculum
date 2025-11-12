
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRotations, updateForm, addForm } from '../services/curriculumService';
import Breadcrumb from '../components/Breadcrumb';
import { Form } from '../types';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from '../components/AuthModal';

const YouTubeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
);

const EditIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
    </svg>
);

const PlusIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);


const FormCard: React.FC<{ form: Form; formIndex: number; rotationSlug: string; onSave: () => void, onRequestAuth: (callback: () => void) => void }> = ({ form, formIndex, rotationSlug, onSave, onRequestAuth }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedForm, setEditedForm] = useState<Form>(() => JSON.parse(JSON.stringify(form)));
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        setEditedForm(JSON.parse(JSON.stringify(form)));
    }, [form]);

    const handleEditClick = () => {
        if (isAuthenticated) {
            setIsEditing(true);
        } else {
            onRequestAuth(() => setIsEditing(true));
        }
    };

    const handleSave = () => {
        const stepsAsString = (Array.isArray(editedForm.steps) ? editedForm.steps.join('\n') : editedForm.steps) as string;
        
        const updatedFormWithArraySteps = {
            ...editedForm,
            steps: stepsAsString.split('\n').filter(step => step.trim() !== ''),
        };

        if (updateForm(rotationSlug, formIndex, updatedFormWithArraySteps)) {
            setIsEditing(false);
            onSave();
        } else {
            alert("Failed to save form.");
        }
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditedForm(prev => ({ ...prev, [name]: value }));
    };

    if (isEditing) {
        return (
            <article className="bg-white rounded-lg border-2 border-ew-gold-dark shadow-lg overflow-hidden p-6 md:p-8">
                <h3 className="text-2xl font-bold font-heading mb-4">Editing: {form.name}</h3>
                <div className="space-y-4">
                    <div>
                        <label htmlFor={`name-${formIndex}`} className="block text-sm font-medium text-ew-text-secondary">Form Name</label>
                        <input type="text" name="name" id={`name-${formIndex}`} value={editedForm.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ew-gold focus:ring-ew-gold sm:text-sm p-2" />
                    </div>
                     <div>
                        <label htmlFor={`card_url-${formIndex}`} className="block text-sm font-medium text-ew-text-secondary">Card Image URL</label>
                        <input type="text" name="card_url" id={`card_url-${formIndex}`} value={editedForm.card_url || ''} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ew-gold focus:ring-ew-gold sm:text-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor={`video_url-${formIndex}`} className="block text-sm font-medium text-ew-text-secondary">Video URL</label>
                        <input type="text" name="video_url" id={`video_url-${formIndex}`} value={editedForm.video_url || ''} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ew-gold focus:ring-ew-gold sm:text-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor={`steps-${formIndex}`} className="block text-sm font-medium text-ew-text-secondary">Steps (one per line)</label>
                        <textarea name="steps" id={`steps-${formIndex}`} rows={10} value={Array.isArray(editedForm.steps) ? editedForm.steps.join('\n') : editedForm.steps} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ew-gold focus:ring-ew-gold sm:text-sm p-2 font-mono text-xs"></textarea>
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <button onClick={() => setIsEditing(false)} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md font-semibold hover:bg-gray-300 transition-colors">Cancel</button>
                    <button onClick={handleSave} className="bg-ew-success text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition-colors">Save Changes</button>
                </div>
            </article>
        );
    }

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
                    <div className="flex items-center gap-2 flex-wrap">
                        {form.video_url && (
                            <a href={form.video_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#DC3545] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#C82333] transition-colors">
                                <YouTubeIcon />
                                View on YouTube
                            </a>
                        )}
                         <button onClick={handleEditClick} className="inline-flex items-center gap-2 bg-ew-gold text-ew-black py-2 px-4 rounded-md font-semibold hover:bg-ew-gold-dark transition-colors">
                           <EditIcon />
                            Edit
                        </button>
                    </div>
                </header>
                <div className="prose max-w-none">
                    {form.steps.length > 0 ? (
                         <ol className="list-decimal pl-5 space-y-2">
                            {form.steps.map((step, index) => (
                                 <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
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

const NewFormEditor: React.FC<{
    onSave: (form: Form) => void;
    onCancel: () => void;
}> = ({ onSave, onCancel }) => {
    const [newForm, setNewForm] = useState({
        belt: 'White Belt',
        name: '',
        card_url: '',
        video_url: '',
        steps: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (!newForm.name.trim()) {
            alert("Form name is required.");
            return;
        }
        const finalForm: Form = {
            ...newForm,
            steps: newForm.steps.split('\n').filter(step => step.trim() !== ''),
        };
        onSave(finalForm);
    };

    return (
        <article className="bg-white rounded-lg border-2 border-ew-gold-dark shadow-lg overflow-hidden p-6 md:p-8 mt-8">
            <h3 className="text-2xl font-bold font-heading mb-4">Add New Form</h3>
            <div className="space-y-4">
                 <div>
                    <label htmlFor="new-belt" className="block text-sm font-medium text-ew-text-secondary">Belt</label>
                    <input type="text" name="belt" id="new-belt" value={newForm.belt} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ew-gold focus:ring-ew-gold sm:text-sm p-2" />
                </div>
                <div>
                    <label htmlFor="new-name" className="block text-sm font-medium text-ew-text-secondary">Form Name</label>
                    <input type="text" name="name" id="new-name" value={newForm.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ew-gold focus:ring-ew-gold sm:text-sm p-2" />
                </div>
                 <div>
                    <label htmlFor="new-card_url" className="block text-sm font-medium text-ew-text-secondary">Card Image URL</label>
                    <input type="text" name="card_url" id="new-card_url" value={newForm.card_url} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ew-gold focus:ring-ew-gold sm:text-sm p-2" />
                </div>
                <div>
                    <label htmlFor="new-video_url" className="block text-sm font-medium text-ew-text-secondary">Video URL</label>
                    <input type="text" name="video_url" id="new-video_url" value={newForm.video_url} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ew-gold focus:ring-ew-gold sm:text-sm p-2" />
                </div>
                <div>
                    <label htmlFor="new-steps" className="block text-sm font-medium text-ew-text-secondary">Steps (one per line)</label>
                    <textarea name="steps" id="new-steps" rows={10} value={newForm.steps} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ew-gold focus:ring-ew-gold sm:text-sm p-2 font-mono text-xs"></textarea>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <button onClick={onCancel} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md font-semibold hover:bg-gray-300 transition-colors">Cancel</button>
                <button onClick={handleSave} className="bg-ew-success text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition-colors">Add Form</button>
            </div>
        </article>
    );
};


const FormsRotationPage: React.FC = () => {
    const { rotationSlug } = useParams<{ rotationSlug: string }>();
    const [forceUpdateKey, forceUpdate] = React.useReducer((x) => x + 1, 0);
    const [isAdding, setIsAdding] = useState(false);
    const [authModalState, setAuthModalState] = useState<{ isOpen: boolean; onSuccess: () => void }>({ isOpen: false, onSuccess: () => {} });
    const { isAuthenticated } = useAuth();

    const allRotations = getRotations();
    const rotation = allRotations.find(r => r.slug === rotationSlug);

    const handleRequestAuth = (callback: () => void) => {
        setAuthModalState({ isOpen: true, onSuccess: callback });
    };

    const handleSuccessfulLogin = () => {
        authModalState.onSuccess();
        setAuthModalState({ isOpen: false, onSuccess: () => {} });
    };

    const handleAddClick = () => {
        if (isAuthenticated) {
            setIsAdding(true);
        } else {
            handleRequestAuth(() => setIsAdding(true));
        }
    };
    
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

    const handleAddNewForm = (newForm: Form) => {
        if (addForm(rotation.slug, newForm)) {
            setIsAdding(false);
            forceUpdate();
        } else {
            alert("Failed to add new form.");
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <AuthModal 
                isOpen={authModalState.isOpen}
                onClose={() => setAuthModalState({ isOpen: false, onSuccess: () => {} })}
                onSuccess={handleSuccessfulLogin}
            />
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
                    rotation.forms.map((form, index) => <FormCard key={`${form.name}-${index}-${forceUpdateKey}`} form={form} formIndex={index} rotationSlug={rotation.slug} onSave={forceUpdate} onRequestAuth={handleRequestAuth} />)
                ) : (
                    <div className="bg-white p-8 rounded-lg border-2 border-ew-border shadow-md text-center">
                        <h2 className="text-2xl font-bold font-heading">No Forms Yet</h2>
                        <p className="mt-2 text-ew-text-secondary">There are no forms in this rotation. Why not add one?</p>
                    </div>
                )}
            </div>

            <div className="mt-12 text-center">
                {!isAdding ? (
                    <button 
                        onClick={handleAddClick}
                        className="inline-flex items-center gap-2 bg-ew-gold text-ew-black py-3 px-6 rounded-md font-semibold hover:bg-ew-gold-dark transition-colors shadow-lg text-lg">
                        <PlusIcon />
                        Add New Form
                    </button>
                ) : (
                    <NewFormEditor onSave={handleAddNewForm} onCancel={() => setIsAdding(false)} />
                )}
            </div>

        </div>
    );
};

export default FormsRotationPage;
