import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import ProjectsPage from './components/ProjectsPage.tsx';
import ScholarshipAdvicePage from './components/ScholarshipAdvicePage.tsx';
import NotFound from './components/NotFound.tsx';
import { ThemeProvider } from './theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Router>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/projects' element={<ProjectsPage />} />
					<Route path='/scholarship-advice' element={<ScholarshipAdvicePage />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
);
