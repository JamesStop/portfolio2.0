import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './HomepageNavigate2.css';

function HomepageNavigate2(props) {
	useEffect(() => {
		updateStyling();
	}, []);

	const newStyling = (event) => {
		document.querySelector('.first').style.width = '80%';
		document.querySelector('.second').style.width = '80%';
		document.querySelector('.third').style.width = '80%';
		document.querySelector('.fourth').style.width = '80%';
		document.querySelector('.first').style['font-size'] = '20px';
		document.querySelector('.second').style['font-size'] = '20px';
		document.querySelector('.third').style['font-size'] = '20px';
		document.querySelector('.fourth').style['font-size'] = '20px';
	};

	const updateStyling = (event) => {
		setTimeout(newStyling, 100);
	};

	const handleHover = (event) => {
		document.querySelector(`.${event.target.className}`).style.height = '85%';
		document.querySelector(`.${event.target.className}`).style.width = '95%';
		document.querySelector(`.${event.target.className}`).style['font-size'] =
			'25px';
	};

	const handleStopHover = (event) => {
		document.querySelector(`.${event.target.className}`).style.height = '65%';
		document.querySelector(`.${event.target.className}`).style.width = '80%';
		document.querySelector(`.${event.target.className}`).style['font-size'] =
			'20px';
	};

	return (
		<div className='details-wrapper-2'>
			<div className='links-wrappers'>
				<Link
					to='/about'
					className='first'
					onMouseOver={handleHover}
					onMouseOut={handleStopHover}>
					first
				</Link>
			</div>
			<div className='links-wrappers'>
				<Link
					to='/projects'
					className='second'
					onMouseOver={handleHover}
					onMouseOut={handleStopHover}>
					second
				</Link>
			</div>
			<div className='links-wrappers'>
				<Link
					to='/projects'
					className='third'
					onMouseOver={handleHover}
					onMouseOut={handleStopHover}>
					third
				</Link>
			</div>
			<div className='links-wrappers'>
				<Link
					to='/projects'
					className='fourth'
					onMouseOver={handleHover}
					onMouseOut={handleStopHover}>
					fourth
				</Link>
			</div>
		</div>
	);
}

export default HomepageNavigate2;
