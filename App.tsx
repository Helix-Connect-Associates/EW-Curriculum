
import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FormsMenuPage from './pages/FormsMenuPage';
import FormsRotationPage from './pages/FormsRotationPage';
import TakedownsPage from './pages/TakedownsPage';
import OneStepsPage from './pages/OneStepsPage';
import TestingRequirementsPage from './pages/TestingRequirementsPage';
import BreakawaysPage from './pages/BreakawaysPage';
import WeaponDefensePage from './pages/WeaponDefensePage';

const Layout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="forms" element={<FormsMenuPage />} />
                    <Route path="forms/:rotationSlug" element={<FormsRotationPage />} />
                    <Route path="takedowns" element={<TakedownsPage />} />
                    <Route path="onesteps" element={<OneStepsPage />} />
                    <Route path="testing-requirements" element={<TestingRequirementsPage />} />
                    <Route path="breakaways" element={<BreakawaysPage />} />
                    <Route path="weapon-defense" element={<WeaponDefensePage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;
