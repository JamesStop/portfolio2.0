import React, { useEffect, useContext, useState } from 'react';
import './Experience.css'
import { ExperiencesContext } from '../../contexts/ExperiencesContext';
import ExperienceDisplay from './ExperienceDisplay';
import resume from '../../Assets/resume.pdf'

function Experience(props) {
	useEffect(() => {
		window.localStorage.setItem('experience', true);
	}, []);

	let experiencesData = useContext(ExperiencesContext);
	const [experiences, setExperience] = useState([])

	const viewResume = () => {
		window.open(resume, '_blank');
	}


	useEffect(() => {setExperience(experiencesData);}, [experiencesData]);

	if (experiences.length > 0) {
		return (
			<div className='experience-wrapper'>
				<h2 className='experience-title-wrapper'>Experience</h2>
				<section className='experiences-display-wrapper'>
					{experiences.map((experience, index) => {
						return <ExperienceDisplay key={index} experience={experience}/>
					})}
				</section>
				<button className='resume-button' onClick={viewResume}>Resume</button>
			</div>
		);
	}
	
}

export default Experience;
