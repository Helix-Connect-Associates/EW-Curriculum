
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
    crumbs: Array<{
        label: string;
        path?: string;
    }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbs }) => {
    return (
        <nav aria-label="Breadcrumb" className="text-sm md:text-base text-ew-text-secondary">
            <ol className="list-none p-0 inline-flex flex-wrap">
                {crumbs.map((crumb, index) => {
                    const isLast = index === crumbs.length - 1;
                    return (
                        <li key={index} className="flex items-center">
                            {crumb.path ? (
                                <Link to={crumb.path} className="hover:text-ew-gold-dark hover:underline transition-colors">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="font-semibold text-ew-text-primary">{crumb.label}</span>
                            )}
                            {!isLast && <span className="mx-2">›</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
