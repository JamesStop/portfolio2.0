import React from 'react';
import { useEffect, useState } from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';
import HomepageNavigate from './HomepageNavigate';
import HomepageNavigate2 from './HomepageNavigate2';

function Homepage(props) {
	const [details, setDetails] = useState(
		window.localStorage.getItem('details') === 'true'
	);

	useEffect(() => {
		setDetails(window.localStorage.getItem('details') === 'true');
	}, []);

	const handleDetails = async (event) => {
		event.preventDefault();
		await setDetails(true);
		await window.localStorage.setItem('details', true);
	};


	return (
		<div className='homepage-wrapper'>
			{!details ? (
				<button className='homepage-details-buttons' onClick={handleDetails}>
					Who Is James?
				</button>
			) : (
				<HomepageNavigate2 />
			)}
		</div>
	);
}

export default Homepage;
