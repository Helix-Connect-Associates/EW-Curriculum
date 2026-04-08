
import React, { useState, useEffect } from 'react';
import { getWeaponDefenses, updateWeaponDefense, addWeaponDefense, deleteWeaponDefense } from '../services/curriculumService';
import Breadcrumb from '../components/Breadcrumb';
import { WeaponDefense } from '../types';
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

const WeaponDefenseEditor: React.FC<{
    defense: Omit<WeaponDefense, 'id'> | WeaponDefense;
    onSave: (defense: Omit<WeaponDefense, 'id'> | WeaponDefense) => void;
    onCancel: () => void;
    onDelete?: () => void;
}> = ({ defense, onSave, onCancel, onDelete }) => {
    const [editedDefense, setEditedDefense] = useState(defense);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedDefense({ ...editedDefense, [e.target.name]: e.target.value });
    };

    const isNew = !('id' in defense);

    return (
        <div className="bg-white rounded-lg border-2 border-ew-gold-dark shadow-lg p-6 my-4">
            <h3 className="text-xl font-bold font-heading mb-4">{isNew ? 'Add New Technique' : `Editing: #${(defense as WeaponDefense).id}`}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="weapon" value={editedDefense.weapon} onChange={handleChange} placeholder="Weapon (e.g., Knife)" className="p-2 border rounded" />
                <input type="text" name="strike" value={editedDefense.strike} onChange={handleChange} placeholder="Strike" className="p-2 border rounded" />
                <input type="text" name="defense" value={editedDefense.defense} onChange={handleChange} placeholder="Defense" className="p-2 border rounded md:col-span-2" />
                <input type="text" name="finishing_move" value={editedDefense.finishing_move} onChange={handleChange} placeholder="Finishing Move" className="p-2 border rounded md:col-span-2" />
                <input type="text" name="video_url" value={editedDefense.video_url} onChange={handleChange} placeholder="Video URL" className="p-2 border rounded" />
                <input type="text" name="video_time" value={editedDefense.video_time} onChange={handleChange} placeholder="Video Start Time" className="p-2 border rounded" />
            </div>
            <div className="mt-6 flex justify-end gap-4">
                {!isNew && onDelete && (
                    <button onClick={onDelete} className="bg-ew-error text-white py-2 px-4 rounded-md font-semibold hover:bg-red-700 transition-colors mr-auto flex items-center gap-2">
                        <TrashIcon /> Delete
                    </button>
                )}
                <button onClick={onCancel} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md font-semibold hover:bg-gray-300 transition-colors">Cancel</button>
                <button onClick={() => onSave(editedDefense)} className="bg-ew-success text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition-colors">Save</button>
            </div>
        </div>
    );
};

const WeaponDefenseCard: React.FC<{ defense: WeaponDefense; onSave: () => void; onRequestAuth: (callback: () => void) => void }> = ({ defense, onSave, onRequestAuth }) => {
    const [isEditing, setIsEditing] = useState(false);
    const { isAuthenticated } = useAuth();

    const handleSave = (updatedDefense: WeaponDefense) => {
        const defenseIndex = getWeaponDefenses().findIndex(d => d.id === updatedDefense.id);
        if (defenseIndex !== -1) {
            updateWeaponDefense(defenseIndex, updatedDefense);
            setIsEditing(false);
            onSave();
        }
    };
    
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete technique #${defense.id}?`)) {
            deleteWeaponDefense(defense.id);
            setIsEditing(false);
            onSave();
        }
    };
    
    const handleEditClick = () => {
        if (isAuthenticated) {
            setIsEditing(true);
        } else {
            onRequestAuth(() => setIsEditing(true));
        }
    };
    
    const handleDeleteClick = () => {
        if (isAuthenticated) {
            handleDelete();
        } else {
            onRequestAuth(handleDelete);
        }
    };

    if (isEditing) {
        return <WeaponDefenseEditor defense={defense} onSave={handleSave} onCancel={() => setIsEditing(false)} onDelete={handleDeleteClick} />;
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-md border-l-8 border-ew-gold relative">
            <div className="absolute top-2 right-2">
                <button onClick={handleEditClick} className="p-2 bg-gray-100 rounded-full hover:bg-ew-gold transition-colors">
                    <EditIcon />
                </button>
            </div>
            <div className="flex justify-between items-start mb-2 pr-10">
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
    const [isAdding, setIsAdding] = useState(false);
    const [authModalState, setAuthModalState] = useState<{ isOpen: boolean; onSuccess: () => void }>({ isOpen: false, onSuccess: () => {} });
    const { isAuthenticated } = useAuth();
    
    useEffect(() => {
        setDefenses(getWeaponDefenses());
    }, []);

    const refreshData = () => {
        setDefenses(getWeaponDefenses());
    };

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

    const handleAddNew = (newDefenseData: Omit<WeaponDefense, 'id'>) => {
        addWeaponDefense(newDefenseData as WeaponDefense); // ID is added in the service
        refreshData();
        setIsAdding(false);
    };

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
            <AuthModal 
                isOpen={authModalState.isOpen}
                onClose={() => setAuthModalState({ isOpen: false, onSuccess: () => {} })}
                onSuccess={handleSuccessfulLogin}
            />
            <Breadcrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Weapon Defense' }]} />
            <header className="my-8 text-center">
                <h1 className="text-3xl md:text-5xl font-heading font-black">Weapon Defense</h1>
                <p className="mt-2 text-lg text-ew-text-secondary max-w-3xl mx-auto">Weapon Self Defense demonstrates the student's ability to block and counter specific moves when being attacked with either a knife or a gun based on the studio curriculum.</p>
            </header>

            {defenses.length === 0 && !isAdding ? (
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
                                    <WeaponDefenseCard key={d.id} defense={d} onSave={refreshData} onRequestAuth={handleRequestAuth} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            )}
            
            <div className="mt-12 text-center">
                {isAdding ? (
                     <WeaponDefenseEditor
                        defense={{ weapon: 'Knife', strike: '', defense: '', finishing_move: '', video_url: '', video_time: '' }}
                        onSave={handleAddNew}
                        onCancel={() => setIsAdding(false)}
                    />
                ) : (
                    <button 
                        onClick={handleAddClick}
                        className="inline-flex items-center gap-2 bg-ew-gold text-ew-black py-3 px-6 rounded-md font-semibold hover:bg-ew-gold-dark transition-colors shadow-lg text-lg">
                        <PlusIcon />
                        Add New Technique
                    </button>
                )}
            </div>
        </div>
    );
};

export default WeaponDefensePage;
