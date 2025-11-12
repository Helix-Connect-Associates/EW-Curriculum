
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { authService } from '../services/authService';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (email: string, passphrase: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(authService.isAuthenticated());

    const login = (email: string, passphrase: string): boolean => {
        const success = authService.login(email, passphrase);
        if (success) {
            setIsAuthenticated(true);
        }
        return success;
    };

    const logout = () => {
        authService.logout();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
