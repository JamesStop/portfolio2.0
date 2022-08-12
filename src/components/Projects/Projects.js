import React, { useEffect, useState } from 'react';
import './Projects.css';
import ProjectsDisplays from './ProjectsDisplays';

function Projects(props) {
	const [projectsType, setProjectsType] = useState('GA');

	const selectGa = () => {
		setProjectsType('GA');
	};

	const selectPersonal = () => {
		setProjectsType('Personal');
	};

	useEffect(() => {
		window.localStorage.setItem('projects', true);
	}, []);

	return (
		<div className='projects-wrapper'>
			<h2 className='projects-title-wrapper'>Projects</h2>
			<nav className='projects-nav-wrapper'>
				<ul className='nav-list'>
					<li onClick={selectGa}>GA Projects</li>
					<li onClick={selectPersonal}>Personal Projects</li>
				</ul>
			</nav>
			<section className='projects-display-wrapper'>
				<ProjectsDisplays />
				<ProjectsDisplays />
				<ProjectsDisplays />
				<ProjectsDisplays />
				<ProjectsDisplays />
			</section>
		</div>
	);
}

export default Projects;
