
import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Breadcrumb from '../components/Breadcrumb';

const BreakawaysPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Breadcrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Breakaways' }]} />
            <ComingSoon
                title="Break Away / Escapes"
                description="Break Aways and Escapes demonstrate the student's ability to escape or break away from an attacker grabbing either from in front or behind. These are specific moves based on the studio curriculum."
            />
        </div>
    );
};

export default BreakawaysPage;
