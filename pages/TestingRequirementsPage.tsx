
import React from 'react';
import { getTestingData } from '../services/curriculumService';
import Breadcrumb from '../components/Breadcrumb';

const TestingRequirementsPage: React.FC = () => {
    const testingData = getTestingData();
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Breadcrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Testing Requirements' }]} />
            <header className="my-8 text-center">
                <h1 className="text-3xl md:text-5xl font-heading font-black">Testing Requirements</h1>
                <p className="mt-2 text-lg text-ew-text-secondary max-w-3xl mx-auto">Information regarding board breaks and program requirements for adult and high school students.</p>
            </header>

            <div className="space-y-16">
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-center">Board Breaks</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full max-w-4xl mx-auto text-sm text-left text-ew-text-secondary border-2 border-ew-gold">
                             <thead className="text-xs text-ew-gold uppercase bg-ew-black">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Child Belt</th>
                                    <th scope="col" className="px-6 py-3">Adult Belt</th>
                                    <th scope="col" className="px-6 py-3">Testing For</th>
                                    <th scope="col" className="px-6 py-3">Break Technique</th>
                                </tr>
                            </thead>
                            <tbody>
                                {testingData.board_breaks.map((b, index) => (
                                    <tr key={index} className="bg-white border-b hover:bg-ew-gold-light transition-colors">
                                        <td className="px-6 py-4 font-medium">{b.child_belt}</td>
                                        <td className="px-6 py-4 font-medium">{b.adult_belt}</td>
                                        <td className="px-6 py-4">{b.testing_for}</td>
                                        <td className="px-6 py-4">{b.break_technique}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
                
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-center">Adult Belt Program</h2>
                     <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-ew-text-secondary border-2 border-ew-gold">
                            <thead className="text-xs text-ew-gold uppercase bg-ew-black">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Rank</th>
                                    <th scope="col" className="px-6 py-3">#</th>
                                    <th scope="col" className="px-6 py-3">Test For</th>
                                    <th scope="col" className="px-6 py-3">Year</th>
                                    <th scope="col" className="px-6 py-3">Testing Hours</th>
                                    <th scope="col" className="px-6 py-3">Challenge</th>
                                    <th scope="col" className="px-6 py-3"># Forms</th>
                                </tr>
                            </thead>
                            <tbody>
                                {testingData.adult_program.map((p, index) => (
                                    <tr key={index} className="border-b" style={{ backgroundColor: p.belt_color }}>
                                        <td className="px-6 py-4 font-bold" style={{color: p.belt_color === '#FFD700' || p.belt_color === '#F5F5F5' ? '#000' : '#FFF'}}>{p.rank}</td>
                                        <td className="px-6 py-4" style={{color: p.belt_color === '#FFD700' || p.belt_color === '#F5F5F5' ? '#000' : '#FFF'}}>{p.number}</td>
                                        <td className="px-6 py-4" style={{color: p.belt_color === '#FFD700' || p.belt_color === '#F5F5F5' ? '#000' : '#FFF'}}>{p.test_for}</td>
                                        <td className="px-6 py-4" style={{color: p.belt_color === '#FFD700' || p.belt_color === '#F5F5F5' ? '#000' : '#FFF'}}>{p.year}</td>
                                        <td className="px-6 py-4" style={{color: p.belt_color === '#FFD700' || p.belt_color === '#F5F5F5' ? '#000' : '#FFF'}}>{p.testing_hours}</td>
                                        <td className="px-6 py-4" style={{color: p.belt_color === '#FFD700' || p.belt_color === '#F5F5F5' ? '#000' : '#FFF'}}>{p.challenge}</td>
                                        <td className="px-6 py-4" style={{color: p.belt_color === '#FFD700' || p.belt_color === '#F5F5F5' ? '#000' : '#FFF'}}>{p.forms}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
                
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-center">High School Program</h2>
                     <div className="overflow-x-auto">
                        <table className="w-full max-w-2xl mx-auto text-sm text-left text-ew-text-secondary border-2 border-ew-gold">
                            <thead className="text-xs text-ew-gold uppercase bg-ew-black">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Belt</th>
                                    <th scope="col" className="px-6 py-3">#</th>
                                    <th scope="col" className="px-6 py-3">Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                {testingData.high_school_program.map((p, index) => (
                                    <tr key={index} className="border-b" style={{ backgroundColor: p.belt_color }}>
                                        <td className="px-6 py-4 font-bold" style={{color: p.belt_color === '#FFD700' || p.belt_color === '#F5F5F5' ? '#000' : '#FFF'}}>{p.belt}</td>
                                        <td className="px-6 py-4" style={{color: p.belt_color === '#FFD700' || p.belt_color === '#F5F5F5' ? '#000' : '#FFF'}}>{p.number}</td>
                                        <td className="px-6 py-4" style={{color: p.belt_color === '#FFD700' || p.belt_color === '#F5F5F5' ? '#000' : '#FFF'}}>{p.form}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TestingRequirementsPage;
