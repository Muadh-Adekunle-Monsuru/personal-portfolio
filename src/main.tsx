import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsPage from './components/ProjectsPage.tsx';
import ScholarshipAdvicePage from './components/ScholarshipAdvicePage.tsx';
import NotFound from './components/NotFound.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='/scholarship-advice' element={<ScholarshipAdvicePage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
