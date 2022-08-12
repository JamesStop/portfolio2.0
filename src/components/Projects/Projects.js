import React, { useEffect, useState, useContext } from 'react';
import './Projects.css';
import ProjectsDisplays from './ProjectsDisplays';
import { ProjectsContext } from '../../contexts/ProjectsContext';

function Projects(props) {
	const [projectsType, setProjectsType] = useState('GA');
	let projectsData = useContext(ProjectsContext);
	const [projects, setProjects] = useState({});

	const selectGa = () => {
		setProjectsType('GA');
	};

	const selectPersonal = () => {
		setProjectsType('Personal');
	};

	useEffect(() => {
		window.localStorage.setItem('projects', true);

	}, []);

	useEffect(() => {
		setProjects(projectsData);
	}, [projectsData]);

	if (projects.gaProjects) {
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
					{projects.gaProjects.map((project, index) => {
					return (
						<ProjectsDisplays
							key={project.projectTitle}
							project={project}
							index={index}
						/>
					);
				})}
				</section>
			</div>
		);
	} else {
		return null;
	}
}

export default Projects;
