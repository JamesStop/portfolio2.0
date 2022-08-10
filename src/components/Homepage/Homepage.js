import React from 'react';
import { useEffect } from 'react';

function Homepage(props) {
	useEffect(() => {
		console.log('hello');
	}, []);

	return <div>homepage</div>;
}

export default Homepage;
