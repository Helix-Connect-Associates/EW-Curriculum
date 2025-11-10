
import React from 'react';
import ComingSoon from '../components/ComingSoon';
import Breadcrumb from '../components/Breadcrumb';

const WeaponDefensePage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Breadcrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Weapon Defense' }]} />
            <ComingSoon
                title="Weapon Self Defense"
                description="Weapon Self Defense demonstrates the student's ability to block and counter specific moves when being attacked with either a knife or a gun based on the studio curriculum."
            />
        </div>
    );
};

export default WeaponDefensePage;
