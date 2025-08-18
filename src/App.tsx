import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Introduction from './components/Introduction';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Tools from './components/tools';

function App() {
	return (
		<main className='font-inter text-[#404040] '>
			<Analytics />
			<div className='lg:min-h-screen p-5 md:p-11 w-auto flex flex-col gap-10 justify-center items-center'>
				<Introduction />
				<WorkExperience />
				<Education />
				<Tools />
			</div>
		</main>
	);
}

export default App;
