import React from 'react';
import { getTestingData } from '../services/curriculumService';
import Breadcrumb from '../components/Breadcrumb';
import { LevelRequirement, BoardBreak } from '../types';

const TestingRequirementsPage: React.FC = () => {
//    const { level_requirements_child6212,level_requirements_teen,level_requirements_adult, board_breaks } = getTestingData();
const { 
        level_requirements_child6212 = [], 
        level_requirements_teen = [], 
        level_requirements_adult = [], 
        board_breaks = [] 
    } = getTestingData() || {};
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Breadcrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Testing Requirements' }]} />
            <header className="my-8 text-center">
                <h1 className="text-3xl md:text-5xl font-heading font-black">Testing Requirements</h1>
                <p className="mt-2 text-lg text-ew-text-secondary max-w-3xl mx-auto">This section details the specific requirements for each belt test, including forms, techniques, and knowledge.</p>
            </header>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 pb-2 border-b-2 border-ew-gold">Board Breaks</h2>
                <div className="overflow-x-auto">
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
           <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 pb-2 border-b-2 border-ew-gold">Testing Requirements (6-12)</h2>
                <div className="overflow-x-auto">
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
			<section className="mb-16">
               <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 pb-2 border-b-2 border-ew-gold">Testing Requirements-Teen</h2>
                <div className="overflow-x-auto">
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
			<section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 pb-2 border-b-2 border-ew-gold">Testing Requirements-Adult</h2>
                <div className="overflow-x-auto">
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
	)
};

export default TestingRequirementsPage;
