import React, { useEffect, useContext, useState } from 'react';
import './Experience.css'
import { ExperiencesContext } from '../../contexts/ExperiencesContext';

function Experience(props) {
	useEffect(() => {
		window.localStorage.setItem('experience', true);
	}, []);

	let experiencesData = useContext(ExperiencesContext);
	const [experiences, setExperience] = useState([])


	useEffect(() => {setExperience(experiencesData);}, [experiencesData]);

	if (experiences.length > 0) {
		return (
			<div className='experience-wrapper'>
				<h2 className='experience-title-wrapper'>Experience</h2>
				<section className='experience-display-wrapper'>
					{experiences.map((experience) => {
						return <div>hi</div>
					})}
				</section>
				<button className='resume-button'>Resume</button>
			</div>
		);
	}
	
}

export default Experience;
