import React, { createContext, useEffect, useState } from 'react';
import masterball from '../Assets/masterball.png';
import gitz from '../Assets/gitz.png'

const ProjectsContext = createContext();

function ProjectsContextProvider({ children }) {
	const DEFAULT_PROJECTSDATA_LAYOUT = {
		projectTitle: '',
		projectDescription: '',
		projectImgSrc: '',
		projectLinks: {
			frontendSite: '',
			frontendGithub: '',
			backendSite: '',
			backendGithub: '',
		},
	};
	const gaProjectsData = [
		{
			projectTitle: 'The Masterball',
			projectDescription:
				'A Pokemon Team creation and customization application.',
			projectImgSrc: masterball,
			projectLinks: {
				site: 'https://the-masterball.netlify.app/',
				github: 'https://github.com/JamesStop/The-Masterball',
			},
		},
		{
			projectTitle: 'The Gitz Carlton Employee Portal',
			projectDescription:
				'A hotel employee portal for checking in and out guests internally.',
			projectImgSrc: gitz,
			projectLinks: {
				site: 'https://cozy-gnome-816bc0.netlify.app/',
				github: 'https://github.com/CPlusPLusPlusPluss/Front-End-Project-3',
			},
		},
	];
	const [projects, setProjects] = useState({});

	useEffect(() => {
		setProjects({gaProjects: gaProjectsData});
	}, []);

	return (
		<ProjectsContext.Provider value={projects}>
			{children}
		</ProjectsContext.Provider>
	);
}

export { ProjectsContext, ProjectsContextProvider };
