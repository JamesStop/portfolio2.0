import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function HomepageNavigate(props) {
	useEffect(() => {
		updateStyling();
	}, []);

	const newStyling = (event) => {
		document.querySelector('.link-top-left').style.height = '40%';
		document.querySelector('.link-top-left').style.width = '40%';
		document.querySelector('.link-top-right').style.height = '40%';
		document.querySelector('.link-top-right').style.width = '40%';
		document.querySelector('.link-bottom-left').style.height = '40%';
		document.querySelector('.link-bottom-left').style.width = '40%';
		document.querySelector('.link-bottom-right').style.height = '40%';
		document.querySelector('.link-bottom-right').style.width = '40%';
		document.querySelector('.link-bottom-right').style['font-size'] = '20px';
		document.querySelector('.link-bottom-left').style['font-size'] = '20px';
		document.querySelector('.link-top-right').style['font-size'] = '20px';
		document.querySelector('.link-top-left').style['font-size'] = '20px';
	};

	const updateStyling = (event) => {
		setTimeout(newStyling, 100);
	};

	const handleHover = (event) => {
		document.querySelector(`.${event.target.className}`).style.height = '45%';
		document.querySelector(`.${event.target.className}`).style.width = '45%';
        document.querySelector(`.${event.target.className}`).style[
					'font-size'
				] = '25px';
	};

	const handleStopHover = (event) => {
		document.querySelector(`.${event.target.className}`).style.height = '40%';
		document.querySelector(`.${event.target.className}`).style.width = '40%';
		document.querySelector(`.${event.target.className}`).style['font-size'] =
			'20px';
	};

	return (
		<div className='details-wrapper'>
			<Link
				to='/about'
				className='link-top-left'
				onMouseOver={handleHover}
				onMouseOut={handleStopHover}>
				first
			</Link>
			<Link
				to='/projects'
				className='link-top-right'
				onMouseOver={handleHover}
				onMouseOut={handleStopHover}>
				second
			</Link>
			<Link
				to='/projects'
				className='link-bottom-left'
				onMouseOver={handleHover}
				onMouseOut={handleStopHover}>
				third
			</Link>
			<Link
				to='/projects'
				className='link-bottom-right'
				onMouseOver={handleHover}
				onMouseOut={handleStopHover}>
				fourth
			</Link>
		</div>
	);
}

export default HomepageNavigate;
