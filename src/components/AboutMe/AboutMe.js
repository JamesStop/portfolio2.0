import React, { useEffect, useState } from 'react';

function AboutMe(props) {
	useEffect(() => {
		window.localStorage.setItem('about', true);
	}, []);

	return <div>about me</div>;
}

export default AboutMe;
