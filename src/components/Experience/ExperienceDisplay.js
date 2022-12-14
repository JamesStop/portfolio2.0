import React from 'react';
import './ExperienceDisplay.css';

function ExperienceDisplay({ experience }) {


	const visit = () => {
		window.open(experience.companyLink, '_blank');
	}

	return (
		<div className='single-experience-display-wrapper'>
			<h3 className='experience-company-name'>{experience.companyName}</h3>
			<p>{experience.duration}</p>
			<img
				className='experience-logo'
				src={experience.companyLogo}
				alt={`${experience.companyName} Logo`}
				onClick={visit}
			/>
			<section className='experience-information-wrapper'>
				<p className='experience-position'>
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
