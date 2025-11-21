import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface GuestContextType {
    guestName: string;
    setGuestName: (name: string) => void;
    hasSeenWelcome: boolean;
}

const GuestContext = createContext<GuestContextType | undefined>(undefined);

const STORAGE_KEY_NAME = 'ewmma_guest_name';

export const GuestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [guestName, setGuestNameState] = useState<string>('');
    const [hasSeenWelcome, setHasSeenWelcome] = useState<boolean>(true); // Default true until loaded

    useEffect(() => {
        const storedName = localStorage.getItem(STORAGE_KEY_NAME);
        if (storedName) {
            setGuestNameState(storedName);
            setHasSeenWelcome(true);
        } else {
            setHasSeenWelcome(false);
        }
    }, []);

    const setGuestName = (name: string) => {
        localStorage.setItem(STORAGE_KEY_NAME, name);
        setGuestNameState(name);
        setHasSeenWelcome(true);
    };

    return (
        <GuestContext.Provider value={{ guestName, setGuestName, hasSeenWelcome }}>
            {children}
        </GuestContext.Provider>
    );
};

export const useGuest = (): GuestContextType => {
    const context = useContext(GuestContext);
    if (context === undefined) {
        throw new Error('useGuest must be used within a GuestProvider');
    }
    return context;
};
