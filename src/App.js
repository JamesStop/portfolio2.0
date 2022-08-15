import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import { ProjectsContextProvider } from './contexts/ProjectsContext';
import ClearStorage from './components/ClearStorage/ClearStorage';
import { ExperiencesContextProvider } from './contexts/ExperiencesContext';

function App() {

	const navigate = useNavigate()

	const gotoClear = () => {
		navigate('/clear_storage')
	}

	return (
		<section className='main-app-wrapper'>
			<header className='header-wrapper'>
				{window.localStorage.getItem('about') &&
				window.localStorage.getItem('projects') &&
				window.localStorage.getItem('experience') &&
				window.localStorage.getItem('contact') ? (
					<button className='secret-button' onClick={gotoClear}>
						!
					</button>
				) : null}
				<Link to='/'>
					<h1 className='header-header'>JAMES STOPPANI</h1>
				</Link>
			</header>
			<main className='main-wrapper'>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/clear_storage' element={<ClearStorage />} />
					<Route path='/about' element={<AboutMe />} />
					<Route
						path='/projects'
						element={
							<ProjectsContextProvider>
								<Projects />
							</ProjectsContextProvider>
						}
					/>

					<Route
						path='/experience'
						element={
							<ExperiencesContextProvider>
								<Experience />
							</ExperiencesContextProvider>
						}
					/>
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</main>
		</section>
	);
}

export default App;
