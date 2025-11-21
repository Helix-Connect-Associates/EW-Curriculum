
import React, { useState, useEffect } from 'react';
import { useGuest } from '../contexts/GuestContext';

const GuestWelcomeModal: React.FC = () => {
    const { hasSeenWelcome, setGuestName } = useGuest();
    const [isOpen, setIsOpen] = useState(false);
    const [nameInput, setNameInput] = useState('');

    useEffect(() => {
        if (!hasSeenWelcome) {
            setIsOpen(true);
        }
    }, [hasSeenWelcome]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (nameInput.trim()) {
            const name = nameInput.trim();
            setGuestName(name);
            
            // Send event to Google Analytics
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'guest_check_in', {
                    'event_category': 'engagement',
                    'event_label': name,
                    'guest_name': name
                });
            }

            setIsOpen(false);
        }
    };

    const handleSkip = () => {
        setGuestName('Student'); // Default name
        
        // Send event to Google Analytics for skipped login
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'guest_check_in', {
                'event_category': 'engagement',
                'event_label': 'Student (Skipped)',
                'guest_name': 'Student (Skipped)'
            });
        }

        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60] p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden border-4 border-ew-gold">
                <div className="bg-ew-black p-6 text-center">
                    <h2 className="text-2xl font-heading font-black text-ew-gold">Welcome to EastWest MMA</h2>
                    <p className="text-ew-white mt-2 opacity-90">Curriculum & Training Companion</p>
                </div>
                <div className="p-8">
                    <p className="text-ew-text-secondary mb-6 text-center">
                        To personalize your experience, please enter your name or nickname.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="guestName" className="block text-sm font-bold text-ew-text-secondary mb-2">
                                Who is training today?
                            </label>
                            <input
                                type="text"
                                id="guestName"
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                                placeholder="e.g. John, Sensei, Tiger"
                                className="w-full px-4 py-3 border-2 border-ew-border rounded-lg focus:outline-none focus:border-ew-gold focus:ring-1 focus:ring-ew-gold text-lg"
                                autoFocus
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-ew-gold text-ew-black rounded-lg font-bold text-lg hover:bg-ew-gold-dark transition-colors shadow-md"
                            >
                                Enter Dojo
                            </button>
                            <button
                                type="button"
                                onClick={handleSkip}
                                className="text-sm text-ew-text-secondary hover:text-ew-black underline"
                            >
                                Skip / I'm just visiting
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GuestWelcomeModal;
