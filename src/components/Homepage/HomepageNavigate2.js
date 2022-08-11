import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './HomepageNavigate2.css';

function HomepageNavigate2(props) {
	useEffect(() => {
		updateStyling();
	}, []);

	const [first, setFirst] = useState('first');
	const [second, setSecond] = useState('second');
	const [third, setThird] = useState('third');
	const [fourth, setFourth] = useState('fourth');

	const newStyling = (event) => {
		setFirst('first loaded');
        setSecond('second loaded');
        setThird('third loaded');
        setFourth('fourth loaded');
	};

	const updateStyling = (event) => {
		setTimeout(newStyling, 100);
	};

	return (
		<div className='details-wrapper-2'>
			<div className='links-wrappers'>
				<Link to='/about' className={first}>
					first
				</Link>
			</div>
			<div className='links-wrappers'>
				<Link to='/projects' className={second}>
					second
				</Link>
			</div>
			<div className='links-wrappers'>
				<Link to='/projects' className={third}>
					third
				</Link>
			</div>
			<div className='links-wrappers'>
				<Link to='/projects' className={fourth}>
					fourth
				</Link>
			</div>
		</div>
	);
}

export default HomepageNavigate2;
