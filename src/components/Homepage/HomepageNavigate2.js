import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './HomepageNavigate2.css';
import photo from '../../Assets/mepicture.jpeg';
import masterballpic from '../../Assets/masterballpic.png';
import dnd from '../../Assets/dnd.png';
import smallepoll from '../../Assets/smallepoll.png';
import email from '../../Assets/email.png';
import github from '../../Assets/GitHub-Mark-120px-plus.png';
import linkdin from '../../Assets/LI-In-Bug.png';


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
		newStyling();
	};

	return (
		<div className='details-wrapper-2'>
			<div className='links-wrappers'>
				<Link to='/about' className={first}>
					<span>About James</span>
					{window.localStorage.getItem('about') == 'true' ? (
						<img src={photo} className='picture-of-me' alt='photo of James' />
					) : null}
				</Link>
			</div>
			<div className='links-wrappers'>
				<Link to='/projects' className={second}>
					<span>James' Projects</span>
					{window.localStorage.getItem('projects') == 'true' ? (
						<img
							src={masterballpic}
							className='masterball-img'
							alt='masterball img'
						/>
					) : null}
					{window.localStorage.getItem('projects') == 'true' ? (
						<img src={dnd} className='dnd-img' alt='dnd img' />
					) : null}
				</Link>
			</div>
			<div className='links-wrappers'>
				<Link to='/experience' className={third}>
					<span>James' Experience</span>
					{window.localStorage.getItem('experience') == 'true' ? (
						<img src={smallepoll} className='picture-of-me' alt='EPoll logo' />
					) : null}
				</Link>
			</div>
			<div className='links-wrappers'>
				<Link to='/contact' className={fourth}>
					{window.localStorage.getItem('contact') == 'true' ? (
						<img src={email} className='email-img' alt='email img' />
					) : null}
					{window.localStorage.getItem('contact') == 'true' ? (
						<img src={github} className='github-img' alt='github img' />
					) : null}
					{window.localStorage.getItem('contact') == 'true' ? (
						<img src={linkdin} className='linkdin-img' alt='linkdin img' />
					) : null}
					<span>Contact James</span>
				</Link>
			</div>
		</div>
	);
}

export default HomepageNavigate2;
