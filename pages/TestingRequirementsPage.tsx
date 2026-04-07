import React, {useState} from 'react';
import { getTestingData, resetCurriculumToDefault } from '../services/curriculumService';
import Breadcrumb from '../components/Breadcrumb';

const TestingRequirementsPage: React.FC = () => {
	const [activeTab, setActiveTab] = useState<'child' | 'teen' | 'adult'| 'Black'>('child');
    const data = getTestingData();
    const { 
        level_requirements_child6212 = [], 
        level_requirements_teen = [], 
        level_requirements_adult = [], 
        board_breaks = [] ,
		board_breaks_teen = [],
		board_breaks_adult = []
    } = data || {};
	const BELT_CONFIG = {
    child: [
        { name: 'White', file: 'white.png' },
        { name: 'Yellow', file: 'Yellow.png' },
		{ name: 'Yellow/Black', file: 'yellowblack.png' },
		{ name: 'Orange', file: 'orange.png' },
		{ name: 'Orange/Black', file: 'orangeblack.png' },
		{ name: 'Purple', file: 'purple.png' },
		{ name: 'Purple/Black', file: 'purpleblack.png' },
		{ name: 'Blue', file: 'blue.png' },
		{ name: 'Blue/Black', file: 'blueblack.png' },
        { name: 'Green', file: 'green.png' },
		{ name: 'Green/Black', file: 'greenblack.png' },
		{ name: 'Red', file: 'red.png' },
		{ name: 'Red/Black', file: 'redblack.png' },
		{ name: 'Brown', file: 'brown.png' },
		{ name: 'Brown/Black', file: 'brownblack.png' },
		{ name: 'Black/White', file: 'blackwhite.png' },
		{ name: 'Black/Yellow', file: 'blackyellow.png' },
		{ name: 'Black/Orange', file: 'blackorange.png' },
		{ name: 'Black/Purple', file: 'blackpurple.png' },
		{ name: 'Black/Blue', file: 'blackblue.png' },
		{ name: 'Black/Green', file: 'blackgreen.png' },
		{ name: 'Black/Red', file: 'blackred.png' },
		{ name: 'Black/Brown', file: 'blackbrown.png' },
		{ name: 'Half/Half', file: 'halfhalf.png' },
		{ name: 'Black', file: 'black.png' }
        // ... only child belts
    ],
    teen: [
        { name: 'White', file: 'white.png' },
        { name: 'Yellow', file: 'Yellow.png' },
		{ name: 'Orange', file: 'orange.png' },
		{ name: 'Purple', file: 'purple.png' },
		{ name: 'Blue', file: 'blue.png' },
        { name: 'Green', file: 'green.png' },
		{ name: 'Green/Black', file: 'greenblack.png' },
		{ name: 'Red', file: 'red.png' },
		{ name: 'Red/Black', file: 'redblack.png' },
		{ name: 'Brown', file: 'brown.png' },
		{ name: 'Brown/Black', file: 'brownblack.png' },
		{ name: 'Black/White', file: 'blackwhite.png' },
		{ name: 'Black/Brown', file: 'blackbrown.png' },
		{ name: 'Half/Half', file: 'halfhalf.png' },
		{ name: 'Black', file: 'black.png' }
        // ... only teen belts
    ],
    adult: [
        { name: 'White', file: 'white.png' },
        { name: 'Yellow', file: 'Yellow.png' },
		{ name: 'Orange', file: 'orange.png' },
		{ name: 'Purple', file: 'purple.png' },
		{ name: 'Blue', file: 'blue.png' },
        { name: 'Green', file: 'green.png' },
		{ name: 'Green/Black', file: 'greenblack.png' },
		{ name: 'Red', file: 'red.png' },
		{ name: 'Red/Black', file: 'redblack.png' },
		{ name: 'Brown', file: 'brown.png' },
		{ name: 'Brown/Black', file: 'brownblack.png' },
		{ name: 'Black/White', file: 'blackwhite.png' },
		{ name: 'Black/Brown', file: 'blackbrown.png' },
		{ name: 'Half/Half', file: 'halfhalf.png' },
		{ name: 'Black', file: 'black.png' }
        // ... only adult belts
    ],
	Black: [
	{ name: 'Black', file: 'black.png' }
        
    ]
};
	const BeltRankings = ({ type }: { type: 'child' | 'teen' | 'adult'| 'Black' }) => {
    // Get the specific list for this tab
    const belts = BELT_CONFIG[type];

    return (
        <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-ew-black uppercase tracking-wider border-l-4 border-ew-gold pl-4">
                {type} Belt Ranking System
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
                {belts.map((belt) => (
                    <a 
                        key={belt.name} 
                        href={`/assets/belts/${belt.file}`} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="group flex flex-col items-center"
                    >
                        <div className="w-full aspect-square bg-white p-4 rounded-xl shadow-sm border border-gray-100 group-hover:border-ew-gold group-hover:shadow-md transition-all flex items-center justify-center">
                            <img 
                                src={`/assets/belts/${belt.file}`} 
                                alt={`${belt.name} Belt`} 
                                className="max-w-full max-h-full object-contain"
                                // Safety: if the file is missing despite our config, hide it
                                onError={(e) => (e.currentTarget.style.display = 'none')}
                            />
                        </div>
                        <p className="text-center text-sm mt-3 font-bold text-ew-text-secondary group-hover:text-ew-gold transition-colors">
                            {belt.name}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    );
};	
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
				<div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-200">
					{(['child', 'teen', 'adult'] as const).map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`px-8 py-3 font-bold uppercase tracking-widest transition-all ${
							activeTab === tab 
							? 'border-b-4 border-ew-gold text-ew-black' 
							: 'text-gray-400 hover:text-ew-gold'
							}`}
						>
							{tab === 'child' ? 'Youth (6-12)' : tab}
						</button>
					))}
				</div>
            </header>

		{/* CHILD BELT SECTION */}
		{activeTab === 'child' && (
			<div className="animate-fadeIn">
				<BeltRankings type="child" />
        
				{/* Your existing Child Board Breaks Table */}
            {/* Board Breaks Section */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 pb-2 border-b-2 border-ew-gold">Board Breaks Age 6-12</h2>
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left text-ew-text-secondary border-2 border-ew-gold">
                        <thead className="text-xs text-ew-gold uppercase bg-ew-black">
                            <tr>
                                <th scope="col" className="px-4 py-3">Belt</th>
                                <th scope="col" className="px-4 py-3">Testing For</th>
                                <th scope="col" className="px-4 py-3">Break Technique</th>
                            </tr>
                        </thead>
                        <tbody>
                            {board_breaks.map((bb, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-ew-gold-light transition-colors`}>
                                    <td className="px-4 py-4 font-medium whitespace-nowrap">{bb.child_belt}</td>
                                    <td className="px-4 py-4">{bb.testing_for}</td>
                                    <td className="px-4 py-4">{bb.break_technique}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        
				{/* Your existing Child Testing Requirements Table */}
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
			</div>
		)}

		{/* TEEN BELT SECTION */}
		{activeTab === 'teen' && (
			<div className="animate-fadeIn">
				<BeltRankings type="teen" />
				{/* Teen Board Breaks Section */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 pb-2 border-b-2 border-ew-gold">Board Breaks Teen</h2>
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left text-ew-text-secondary border-2 border-ew-gold">
                        <thead className="text-xs text-ew-gold uppercase bg-ew-black">
                            <tr>
                                <th scope="col" className="px-4 py-3">Belt</th>
                                <th scope="col" className="px-4 py-3">Testing For</th>
                                <th scope="col" className="px-4 py-3">Break Technique</th>
                            </tr>
                        </thead>
                        <tbody>
                            {board_breaks_teen.map((bt, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-ew-gold-light transition-colors`}>
                                    <td className="px-4 py-4 font-medium whitespace-nowrap">{bt.teen_belt}</td>
                                    <td className="px-4 py-4">{bt.testing_for}</td>
                                    <td className="px-4 py-4">{bt.break_technique}</td>
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
			</div>
		)}

		{/* ADULT BELT SECTION */}
		{activeTab === 'adult' && (
			<div className="animate-fadeIn">
				<BeltRankings type="adult" />
				{/* Adult Board Breaks Section */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 pb-2 border-b-2 border-ew-gold">Board Breaks Adult</h2>
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left text-ew-text-secondary border-2 border-ew-gold">
                        <thead className="text-xs text-ew-gold uppercase bg-ew-black">
                            <tr>
                                <th scope="col" className="px-4 py-3">Belt</th>
                                <th scope="col" className="px-4 py-3">Testing For</th>
                                <th scope="col" className="px-4 py-3">Break Technique</th>
                            </tr>
                        </thead>
                        <tbody>
                            {board_breaks_adult.map((ba, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-ew-gold-light transition-colors`}>
                                    <td className="px-4 py-4 font-medium whitespace-nowrap">{ba.adult_belt}</td>
                                    <td className="px-4 py-4">{ba.testing_for}</td>
                                    <td className="px-4 py-4">{ba.break_technique}</td>
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
		)}



			
			
        </div>
    );

			{/* BLACK BELT SECTION */}
		{activeTab === 'Black' && (
			<div className="animate-fadeIn">
				<BeltRankings type="Black" />
				{/* Black Belt Testing */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 pb-2 border-b-2 border-ew-gold">Black Belt Testing Requirements</h2>
				<br></br>
				<p>"Black Belt Testing requirements: "</p>
				<p>"Black Belt Testing Dates: Rotation 3 testing (September) and occassionally Rotation 1 "<i>(not guaranteed)</i></p>
				<br></br>
				<p><b>"Test Preparation"</b></p>
				<br></br>
				<p>"If you are a teenager and are willing to spend your entire summer preparing for the test, you can easily prepare for the test in three months.  However, if you are an adult or tend to have a busy schedule it is suggested that you spend the year leading up to your black belt test spending time every week on your preparation.  By spending a few hours every week, you will be prepared for the test and will not have sacrificed everything else to prepare for it."</p>
				<br></br>
				<p>"Understand that, if you do everything right and make no mistakes on your forms test, you should expect to run 12 miles during the 26 hours of your Black Belt test.  Below is a suggested 1 year program for successful preparation for the test.  If you follow this plan, you will not only be ready for the test but will also have shown everyone that you have prepared and dedicated yourself to it. This plan assumes you will be testing in September.  If the plan is for you to test at another time, make the appropriate adjustments."</p>
				<br></br>
				<br></br>
				<p><b>"Rotation 4"</b> <i>"(Immediately after the September test)"</i></p>
				<p>"Master all of the forms of rotation 4.  Aim for zero mistakes during December testing."</p>
				<p>"Run 1 mile 3 times per week for the first two months and then make one of them two miles."</p>
				<br></br>
				<p><b>"Rotation 1"</b></p>
				<p>"Continue to practice rotation 4 forms.  Master all of the forms for rotation 1.  Again aim for zero mistakes during the forms testing.  At some point during the rotation, ask a Black Belt to test you on rotation 4 and rotation 1 to make sure that you are on track with your forms."<b>"Seek Help if you are Struggling"</b></p>
				<p>"Run 2 miles two times per week and 1 mile for your third run.  Focus on your time being under 10 minutes per mile (11 if you are a struggling runner)."</p>
				<p>"Focus on your right side takedowns & one-steps."</p>
				<br></br>
				<p><b>"Rotation 2"</b></p>
				<p>"Continue to practice rotation 4 and rotation 1.  Master all of the forms for rotation 2.  Again aimr for zero mistakest during testing.  Again, at some point during the rotation, ask a Black Belt to test you on 4,1 & 2."</p>
				<p>"Run 3 miles once per week and 2 miles the other two times.  Feel free to run more if you feel that you need to.  You may want to add one or two 5 mile runs during the month just to get used to the distance.  Focus on maintaining your pace and trying to maintain under a 10 minute mile."</p>
				<p>"Start working on your one-steps & takedowns on both sides plus self defense and knife defense.  Start getting in some hard sparring rounds."</p>
				<br></br>
				<p><b>"Rotation 3"</b></p>
				<p>"This is it.  This is the final push to the end.  The make it or break it time for your Black Belt."</p>
				<p>"Work on all four rotation forms ensuring that you make no mistakes on any of them.  Mistakes mean miles on the test (You don't want them)."</p>
				<p>"Run 3-5 miles two to three times per week.  You want to make sure that you can run whatever distance they ask during testing and maintain a sub 10 minute per mile pace."</p>
			</section>
			</div>
    );
	}
};

export default TestingRequirementsPage;