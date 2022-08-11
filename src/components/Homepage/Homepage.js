import React from 'react';
import { useEffect, useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

function Homepage(props) {
	const [details, setDetails] = useState(window.localStorage.getItem('details') === 'true');

    useEffect(() => {
        setDetails(window.localStorage.getItem('details') === 'true');
    }, [])

	const handleDetails = (event) => {
        event.preventDefault()
		setDetails(true);
        window.localStorage.setItem('details', true);
	};

	return (
		<div className='homepage-wrapper'>
			{!details ? (
				<button className='homepage-details-buttons' onClick={handleDetails}>
					Who Is James?
				</button>
			) : (
				<div className='details-wrapper'>
					<Link to='/about'>about</Link>
					<Link to='/projects'>projects</Link>
				</div>
			)}
		</div>
	);
}

export default Homepage;
