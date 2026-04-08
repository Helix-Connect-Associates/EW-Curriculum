
import React, { useState, useEffect } from 'react';
import { getOneSteps, updateOneStep, addOneStep, deleteOneStep } from '../services/curriculumService';
import Breadcrumb from '../components/Breadcrumb';
import { OneStep } from '../types';
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

const TrashIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
    </svg>
);

const beltColors: { [key: string]: string } = {
    'White': 'border-gray-300', 'Yellow': 'border-belt-yellow', 'Orange': 'border-belt-orange',
    'Purple': 'border-belt-purple', 'Blue': 'border-belt-blue', 'Green': 'border-belt-green',
    'Red': 'border-belt-red', 'Brown': 'border-belt-brown', 'Black': 'border-belt-black'
};

const OneStepEditor: React.FC<{
    onestep: Omit<OneStep, 'id'> | OneStep;
    onSave: (onestep: Omit<OneStep, 'id'> | OneStep) => void;
    onCancel: () => void;
    onDelete?: () => void;
}> = ({ onestep, onSave, onCancel, onDelete }) => {
    const [edited, setEdited] = useState(onestep);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEdited({ ...edited, [name]: name === 'number' ? parseInt(value) || 0 : value });
    };

    const isNew = !('id' in onestep);

    return (
        <div className="bg-white rounded-lg border-2 border-ew-gold-dark shadow-lg p-6 my-4">
            <h3 className="text-xl font-bold font-heading mb-4">{isNew ? 'Add New One Step' : `Editing: #${(onestep as OneStep).number}`}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="number" name="number" value={edited.number} onChange={handleChange} placeholder="Number" className="p-2 border rounded" />
                <input type="text" name="belt" value={edited.belt} onChange={handleChange} placeholder="Belt" className="p-2 border rounded" />
                <textarea name="technique_right" value={edited.technique_right} onChange={handleChange} placeholder="Technique (Right)" className="p-2 border rounded md:col-span-2" rows={3}></textarea>
                <textarea name="technique_left" value={edited.technique_left} onChange={handleChange} placeholder="Technique (Left)" className="p-2 border rounded md:col-span-2" rows={3}></textarea>
                <input type="text" name="video_url" value={edited.video_url} onChange={handleChange} placeholder="Video URL" className="p-2 border rounded" />
                <input type="text" name="video_time" value={edited.video_time} onChange={handleChange} placeholder="Video Start Time" className="p-2 border rounded" />
            </div>
            <div className="mt-6 flex justify-end gap-4">
                {!isNew && onDelete && (
                    <button onClick={onDelete} className="bg-ew-error text-white py-2 px-4 rounded-md font-semibold hover:bg-red-700 transition-colors mr-auto flex items-center gap-2">
                        <TrashIcon /> Delete
                    </button>
                )}
                <button onClick={onCancel} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md font-semibold hover:bg-gray-300 transition-colors">Cancel</button>
                <button onClick={() => onSave(edited)} className="bg-ew-success text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition-colors">Save</button>
            </div>
        </div>
    );
};


const OneStepCard: React.FC<{ onestep: OneStep; onSave: () => void; onRequestAuth: (callback: () => void) => void }> = ({ onestep, onSave, onRequestAuth }) => {
    const [isEditing, setIsEditing] = useState(false);
    
    const handleSave = (updated: OneStep) => {
        updateOneStep(updated.id, updated);
        setIsEditing(false);
        onSave();
    };

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete one step #${onestep.number}?`)) {
            deleteOneStep(onestep.id);
            setIsEditing(false);
            onSave();
        }
    };
    
    const handleEditClick = () => onRequestAuth(() => setIsEditing(true));
    const handleDeleteClick = () => onRequestAuth(handleDelete);

    if (isEditing) {
        return <OneStepEditor onestep={onestep} onSave={handleSave} onCancel={() => setIsEditing(false)} onDelete={handleDeleteClick} />;
    }

    return (
        <div className={`bg-white p-4 rounded-lg shadow-md border-l-8 ${beltColors[onestep.belt] || 'border-gray-300'} relative`}>
            <div className="absolute top-2 right-2">
                <button onClick={handleEditClick} className="p-2 bg-gray-100 rounded-full hover:bg-ew-gold transition-colors">
                    <EditIcon />
                </button>
            </div>
            <div className="font-bold text-lg mb-2 pr-10">
                #{onestep.number} - {onestep.belt || 'All Belts'}
            </div>
            <div className="mb-3">
                <h4 className="font-semibold text-ew-text-secondary">Technique (Right)</h4>
                <p>{onestep.technique_right}</p>
            </div>
            <div className="mb-3">
                <h4 className="font-semibold text-ew-text-secondary">Technique (Left)</h4>
                <p>{onestep.technique_left}</p>
            </div>
            {onestep.video_url ? (
                <a href={onestep.video_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-ew-gold text-ew-black font-bold py-2 px-4 rounded hover:bg-ew-gold-dark transition-colors">
                    <YouTubeIcon />
                    <span>Watch at {onestep.video_time}</span>
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


const OneStepsPage: React.FC = () => {
    const [onesteps, setOneSteps] = useState<OneStep[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [authModalState, setAuthModalState] = useState<{ isOpen: boolean; onSuccess: () => void }>({ isOpen: false, onSuccess: () => {} });

    useEffect(() => {
        setOneSteps(getOneSteps());
    }, []);

    const refreshData = () => setOneSteps(getOneSteps());
    
    const handleRequestAuth = (callback: () => void) => setAuthModalState({ isOpen: true, onSuccess: callback });
    
    const handleSuccessfulLogin = () => {
        authModalState.onSuccess();
        setAuthModalState({ isOpen: false, onSuccess: () => {} });
    };

    const handleAddClick = () => handleRequestAuth(() => setIsAdding(true));
    
    const handleAddNew = (newOneStep: Omit<OneStep, 'id'>) => {
        addOneStep(newOneStep as OneStep);
        refreshData();
        setIsAdding(false);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <AuthModal 
                isOpen={authModalState.isOpen}
                onClose={() => setAuthModalState({ isOpen: false, onSuccess: () => {} })}
                onSuccess={handleSuccessfulLogin}
            />
            <Breadcrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'One Steps' }]} />
            <header className="my-8 text-center">
                <h1 className="text-3xl md:text-5xl font-heading font-black">One Steps</h1>
                <p className="mt-2 text-lg text-ew-text-secondary max-w-3xl mx-auto">One Steps demonstrate the student's ability to block and counter specific moves based on the studio curriculum.</p>
                <a href="https://www.youtube.com/watch?v=qldjJeRfABo" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-ew-gold text-ew-black font-bold py-2 px-6 rounded hover:bg-ew-gold-dark transition-colors">
                    Watch Full Video
                </a>
            </header>

            <div className="space-y-4">
                {onesteps.map(o => <OneStepCard key={o.id} onestep={o} onSave={refreshData} onRequestAuth={handleRequestAuth} />)}
            </div>

            <div className="mt-12 text-center">
                {isAdding ? (
                    <OneStepEditor
                        onestep={{ number: onesteps.length + 1, belt: 'White', technique_right: '', technique_left: '', video_url: '', video_time: '' }}
                        onSave={handleAddNew}
                        onCancel={() => setIsAdding(false)}
                    />
                ) : (
                    <button 
                        onClick={handleAddClick}
                        className="inline-flex items-center gap-2 bg-ew-gold text-ew-black py-3 px-6 rounded-md font-semibold hover:bg-ew-gold-dark transition-colors shadow-lg text-lg">
                        <PlusIcon />
                        Add New One Step
                    </button>
                )}
            </div>
        </div>
    );
};

export default OneStepsPage;
