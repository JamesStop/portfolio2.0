import React, { createContext, useEffect, useState } from 'react';
import masterball from '../Assets/masterball.png';

const ProjectsContext = createContext();

function ProjectsContextProvider({children}) {
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
	const projectsData = [
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
	];
	const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, [])

	return (
		<ProjectsContext.Provider value={projects}>
			{children}
		</ProjectsContext.Provider>
	);
}

export { ProjectsContext, ProjectsContextProvider };
