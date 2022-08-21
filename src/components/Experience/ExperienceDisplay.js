import React from 'react';
import './ExperienceDisplay.css';

function ExperienceDisplay({ experience }) {
	return (
		<div className='single-experience-display-wrapper'>
			<h3>{experience.companyName}</h3>
			<p>{experience.duration}</p>
			<img
				className='experience-logo'
				src={experience.companyLogo}
				alt={`${experience.companyName} Logo`}
			/>
			<section className='experience-information-wrapper'>
				<p>
					<span className='bold'>Position: </span>
					{experience.position}
				</p>
				<p className='experience-description'>
					<span className='bold'>Job Description: </span>
					<span className='description-text'>{experience.jobDescription}</span>
				</p>
			</section>
		</div>
	);
}

export default ExperienceDisplay;
