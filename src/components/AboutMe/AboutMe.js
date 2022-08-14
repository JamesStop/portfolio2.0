import React, { useEffect, useState } from 'react';
import './AboutMe.css'

function AboutMe(props) {
	useEffect(() => {
		window.localStorage.setItem('about', true);
	}, []);

	return (
		<div className='about-wrapper'>
			<h3 className='about-title'>About James</h3>
			<p className='about-info'>
				<span>
					I graduated from the University of Connecticut with a Bachelor of
					Science degree in Psychology in 2018 and relatively quickly found
					myself a job as a survey programming at an entertainment research
					company called E-Poll where for 3 years I programmed the companies
					custom side surveys using their own programming system after around 2
					weeks of training. In late 2021, due to the Covid-19 pandemic the
					company had seen a decline in custom side projects and as a result I,
					and a good portion of fellow employees in the same department, were
					furloughed and eventually let go. Thanks to this, I finally found
					myself with the time to pursue more proper education in programming
					and eventually made my way to General Assembly.
				</span>
				<span>
					I pride myself in taking care to ensure everything I create is as fun
					as possible and am always looking for ways to further elevate the
					experience for the intended user. To some extent I believe my
					Psychology degree gives me an edge in predicting how the intended
					audience would react/perceive what I make.
				</span>
			</p>
		</div>
	);
}

export default AboutMe;
