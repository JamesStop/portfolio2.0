import React from 'react';
import './ProjectsDisplays.css';

function ProjectsDisplays({ project, index }) {

    const visitSite = () => {
        window.open(project.projectLinks.site, '_blank');
    }

	if (index % 2 != 0) {
		return (
			<div className='testingthing'>
				<h3 className='project-title'>{project.projectTitle}</h3>
				<p className='project-description'>{project.projectDescription}</p>
				<img className='project-image' src={project.projectImgSrc} alt='' />
				<button className='visit-button left' onClick={visitSite}>
					visit
				</button>
			</div>
		);
	} else {
		return (
			<div className='testingthing'>
				<h3 className='project-title'>{project.projectTitle}</h3>
				<img className='project-image' src={project.projectImgSrc} alt='' />
				<p className='project-description'>{project.projectDescription}</p>
				<button className='visit-button right' onClick={visitSite}>visit</button>
			</div>
		);
	}
}

export default ProjectsDisplays;
