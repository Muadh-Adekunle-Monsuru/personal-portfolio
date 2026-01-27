import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Introduction from './components/Introduction';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Tools from './components/tools';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		const notifyMe = async () => {
			const token = import.meta.env.VITE_TELEGRAM_TOKEN;
			const chatId = import.meta.env.VITE_CHAT_ID;
			const text = '🚀 Someone just viewed your portfolio!';

			try {
				await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ chat_id: chatId, text: text }),
				});
			} catch (err) {
				console.error('Notification failed', err);
			}
		};

		notifyMe();
	}, []);
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
