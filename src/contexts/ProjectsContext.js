import React, { createContext, useEffect, useState } from 'react';
import masterball from '../Assets/masterball.png';
import gitz from '../Assets/gitz.png'
import dndwithin from '../Assets/dndwithin.png'
import portfolio from '../Assets/portfolio1.png'
import idlegame from '../Assets/idlegame.png'
import mobius from '../Assets/mobius.png'
import table from '../Assets/table.png'
import SVG from '../Assets/SVG.PNG'

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
				site: 'https://gitz-carlton.netlify.app/',
				github: 'https://github.com/CPlusPLusPlusPluss/Front-End-Project-3',
			},
		},
		{
			projectTitle: 'DnD Within',
			projectDescription:
				'A Dungeons and Dragons character creator app that uses state to simulate a temporary backend',
			projectImgSrc: dndwithin,
			projectLinks: {
				site: 'https://cosmic-strudel-3baddd.netlify.app/',
				github: 'https://github.com/JamesStop/DnD-Within',
			},
		},
		{
			projectTitle: 'Portfolio Verson 1.0',
			projectDescription:
				'First version of my portfolio site, made with vanilla Javascript, HTML, and CSS.',
			projectImgSrc: portfolio,
			projectLinks: {
				site: 'https://jamesstop.github.io/JamesStoppaniPortfolioSite/',
				github: 'https://github.com/JamesStop/JamesStoppaniPortfolioSite',
			},
		},
	];

	const personalProjects = [
		{
			projectTitle: 'Mobius Spellbook',
			projectDescription:
				'A work in progress vanilla Javascript, HTML, and CSS idle game that I began building before starting GA, and continue building whenever I find some free time',
			projectImgSrc: mobius,
			projectLinks: {
				site: 'https://mobius-spellbook.netlify.app/',
				github: 'https://github.com/JamesStop/Mobius-Spellbook',
			},
		},
		{
			projectTitle: 'Table filtering practice',
			projectDescription:
				'Simple table filtering practice using react. Table and filter are responsive to the data chosen, and the url allows revisiting specific data/filter sets.',
			projectImgSrc: table,
			projectLinks: {
				site: 'https://basic-table-filter-practice.netlify.app/',
				github: 'https://github.com/JamesStop/table-filtering-practice',
			},
		},
		{
			projectTitle: 'Fun with SVG',
			projectDescription:
				'Just a little fun learning and working with SVG elements to make images and animations.',
			projectImgSrc: SVG,
			projectLinks: {
				site: 'https://jamesstop.github.io/svg-practice/',
				github: 'https://github.com/JamesStop/svg-practice',
			},
		},
	];

	const [projects, setProjects] = useState({});

	useEffect(() => {
		setProjects({gaProjects: gaProjectsData, personalProjects: personalProjects});
	}, []);

	return (
		<ProjectsContext.Provider value={projects}>
			{children}
		</ProjectsContext.Provider>
	);
}

export { ProjectsContext, ProjectsContextProvider };
