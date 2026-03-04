import React from 'react';
import { getTestingData, resetCurriculumToDefault } from '../services/curriculumService';
import Breadcrumb from '../components/Breadcrumb';

const TestingRequirementsPage: React.FC = () => {
    // 1. Fetch data from service
    const data = getTestingData();

    // 2. Destructure with default empty arrays to prevent "Cannot read properties of undefined (reading 'map')"
    const { 
        level_requirements_child6212 = [], 
        level_requirements_teen = [], 
        level_requirements_adult = [], 
        board_breaks = [] 
    } = data || {};

    // 3. Logic check: If the page is "blank" because of old localStorage data, show a recovery screen
    if (!data || (board_breaks.length === 0 && level_requirements_adult.length === 0)) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Data Sync Required</h2>
                <p className="mb-6 text-ew-text-secondary">It looks like your browser is holding onto an older version of the curriculum.</p>
                <button 
                    onClick={resetCurriculumToDefault}
                    className="bg-ew-gold hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    Update & Refresh Curriculum
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="flex justify-between items-center mb-4">
                <Breadcrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Testing Requirements' }]} />
                {/* Admin/Debug Reset Button */}
                <button 
                    onClick={resetCurriculumToDefault}
                    className="text-xs text-gray-400 hover:text-red-500 transition-colors underline"
                    title="Clears local cache and reloads from source code"
                >
                    Reset Local Data
                </button>
            </div>

            <header className="my-8 text-center">
                <h1 className="text-3xl md:text-5xl font-heading font-black">Testing Requirements</h1>
                <p className="mt-2 text-lg text-ew-text-secondary max-w-3xl mx-auto">
                    This section details the specific requirements for each belt test, including forms, techniques, and knowledge.
                </p>
            </header>

            {/* Board Breaks Section */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 pb-2 border-b-2 border-ew-gold">Board Breaks</h2>
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left text-ew-text-secondary border-2 border-ew-gold">
                        <thead className="text-xs text-ew-gold uppercase bg-ew-black">
                            <tr>
                                <th scope="col" className="px-4 py-3">Child Belt</th>
                                <th scope="col" className="px-4 py-3">Adult Belt</th>
                                <th scope="col" className="px-4 py-3">Testing For</th>
                                <th scope="col" className="px-4 py-3">Break Technique</th>
                            </tr>
                        </thead>
                        <tbody>
                            {board_breaks.map((bb, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-ew-gold-light transition-colors`}>
                                    <td className="px-4 py-4 font-medium whitespace-nowrap">{bb.child_belt}</td>
                                    <td className="px-4 py-4">{bb.adult_belt}</td>
                                    <td className="px-4 py-4">{bb.testing_for}</td>
                                    <td className="px-4 py-4">{bb.break_technique}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Child 6-12 Section */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 pb-2 border-b-2 border-ew-gold">Testing Requirements (6-12)</h2>
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left text-ew-text-secondary border-2 border-ew-gold">
                        <thead className="text-xs text-ew-gold uppercase bg-ew-black">
                            <tr>
                                <th scope="col" className="px-4 py-3">Level</th>
                                <th scope="col" className="px-4 py-3">Rank</th>
                                <th scope="col" className="px-4 py-3">Test For</th>
                                <th scope="col" className="px-4 py-3">Form</th>
                                <th scope="col" className="px-4 py-3">Takedown</th>
                                <th scope="col" className="px-4 py-3">One Step</th>
                                <th scope="col" className="px-4 py-3">Challenge</th>
                                <th scope="col" className="px-4 py-3">Sprint</th>
                                <th scope="col" className="px-4 py-3">Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {level_requirements_child6212.map((req, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-ew-gold-light transition-colors`}>
                                    <td className="px-4 py-4 font-medium whitespace-nowrap">{req.level}</td>
                                    <td className="px-4 py-4">{req.rank}</td>
                                    <td className="px-4 py-4">{req.testfor}</td>
                                    <td className="px-4 py-4">{req.form}</td>
                                    <td className="px-4 py-4">{req.take_down}</td>
                                    <td className="px-4 py-4">{req.one_step}</td>
                                    <td className="px-4 py-4">{req.challenge}</td>
                                    <td className="px-4 py-4">{req.sprint}</td>
                                    <td className="px-4 py-4">{req.hours}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Teens Section */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 pb-2 border-b-2 border-ew-gold">Testing Requirements - Teen</h2>
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left text-ew-text-secondary border-2 border-ew-gold">
                        <thead className="text-xs text-ew-gold uppercase bg-ew-black">
                            <tr>
                                <th scope="col" className="px-4 py-3">Level</th>
                                <th scope="col" className="px-4 py-3">Rank</th>
                                <th scope="col" className="px-4 py-3">Test For</th>
                                <th scope="col" className="px-4 py-3">Form</th>
                                <th scope="col" className="px-4 py-3">Takedown</th>
                                <th scope="col" className="px-4 py-3">One Step</th>
                                <th scope="col" className="px-4 py-3">Challenge</th>
                                <th scope="col" className="px-4 py-3">Sprint</th>
                                <th scope="col" className="px-4 py-3">Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {level_requirements_teen.map((reqt, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-ew-gold-light transition-colors`}>
                                    <td className="px-4 py-4 font-medium whitespace-nowrap">{reqt.level}</td>
                                    <td className="px-4 py-4">{reqt.rank}</td>
                                    <td className="px-4 py-4">{reqt.testfor}</td>
                                    <td className="px-4 py-4">{reqt.form}</td>
                                    <td className="px-4 py-4">{reqt.take_down}</td>
                                    <td className="px-4 py-4">{reqt.one_step}</td>
                                    <td className="px-4 py-4">{reqt.challenge}</td>
                                    <td className="px-4 py-4">{reqt.sprint}</td>
                                    <td className="px-4 py-4">{reqt.hours}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Adult Section */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 pb-2 border-b-2 border-ew-gold">Testing Requirements - Adult</h2>
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left text-ew-text-secondary border-2 border-ew-gold">
                        <thead className="text-xs text-ew-gold uppercase bg-ew-black">
                            <tr>
                                <th scope="col" className="px-4 py-3">Level</th>
                                <th scope="col" className="px-4 py-3">Rank</th>
                                <th scope="col" className="px-4 py-3">Test For</th>
                                <th scope="col" className="px-4 py-3">Form</th>
                                <th scope="col" className="px-4 py-3">Takedown</th>
                                <th scope="col" className="px-4 py-3">One Step</th>
                                <th scope="col" className="px-4 py-3">Challenge</th>
                                <th scope="col" className="px-4 py-3">Sprint</th>
                                <th scope="col" className="px-4 py-3">Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {level_requirements_adult.map((reqa, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-ew-gold-light transition-colors`}>
                                    <td className="px-4 py-4 font-medium whitespace-nowrap">{reqa.level}</td>
                                    <td className="px-4 py-4">{reqa.rank}</td>
                                    <td className="px-4 py-4">{reqa.testfor}</td>
                                    <td className="px-4 py-4">{reqa.form}</td>
                                    <td className="px-4 py-4">{reqa.take_down}</td>
                                    <td className="px-4 py-4">{reqa.one_step}</td>
                                    <td className="px-4 py-4">{reqa.challenge}</td>
                                    <td className="px-4 py-4">{reqa.sprint}</td>
                                    <td className="px-4 py-4">{reqa.hours}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default TestingRequirementsPage;