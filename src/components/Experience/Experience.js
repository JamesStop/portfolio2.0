import React, { useEffect } from 'react';

function Experience(props) {
	useEffect(() => {
		window.localStorage.setItem('experience', true);
	}, []);

	return <div>experience</div>;
}

export default Experience;
