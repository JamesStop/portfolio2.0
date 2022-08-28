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
import home from './Assets/home.png'
import Credits from './components/Credits/Credits';

function App() {

	const navigate = useNavigate()

	const gotoClear = () => {
		navigate('/clear_storage')
	}

	const gotoHome = () => {
		navigate('/');
	};

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
				<button className='home-button' onClick={gotoHome}>
					<img className='home-img' src={home} />
				</button>
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
					<Route path='/credits' element={<Credits />} />
				</Routes>
			</main>
			<footer className='footer'>
				<p>Ⓒ James Stoppani 2022</p>
				<Link to='/credits'>
					<p>credits + attributions</p>
				</Link>
			</footer>
		</section>
	);
}

export default App;
