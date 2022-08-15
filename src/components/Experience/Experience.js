import React, { useEffect } from 'react';
import './Experience.css'

function Experience(props) {
	useEffect(() => {
		window.localStorage.setItem('experience', true);
	}, []);

	return (
		<div className='experience-wrapper'>
			<h2 className='experience-title-wrapper'>Experience</h2>
			<section className='experience-display-wrapper'>
				<div className='experience-display'>
					<span className='hello'>hello</span>
				</div>
				<div className='experience-display'>
					<span className='hello'>hello</span>
				</div>
			</section>
			<button className='resume-button'>Resume</button>
		</div>
	);
}

export default Experience;
