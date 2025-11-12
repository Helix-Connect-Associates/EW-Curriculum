
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
    const [email, setEmail] = useState('');
    const [passphrase, setPassphrase] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();

    if (!isOpen) return null;

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (login(email, passphrase)) {
            onSuccess();
        } else {
            setError('Invalid email or passphrase. Please try again.');
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            aria-modal="true"
            role="dialog"
        >
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md m-4">
                <h2 className="text-2xl font-bold font-heading mb-4 text-ew-text-primary">Admin Authentication Required</h2>
                <p className="mb-6 text-ew-text-secondary">Please enter your credentials to make changes.</p>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-bold text-ew-text-secondary mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-ew-border rounded-md focus:outline-none focus:ring-2 focus:ring-ew-gold"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="passphrase" className="block text-sm font-bold text-ew-text-secondary mb-2">Passphrase</label>
                        <input
                            type="password"
                            id="passphrase"
                            value={passphrase}
                            onChange={(e) => setPassphrase(e.target.value)}
                            className="w-full px-3 py-2 border border-ew-border rounded-md focus:outline-none focus:ring-2 focus:ring-ew-gold"
                            required
                        />
                    </div>
                    {error && <p className="text-ew-error text-sm mb-4">{error}</p>}
                    <div className="flex justify-end gap-4">
                        <button type="button" onClick={onClose} className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md font-semibold hover:bg-gray-300 transition-colors">
                            Cancel
                        </button>
                        <button type="submit" className="py-2 px-4 bg-ew-gold text-ew-black rounded-md font-semibold hover:bg-ew-gold-dark transition-colors">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthModal;
