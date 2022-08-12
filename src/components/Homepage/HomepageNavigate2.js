import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './HomepageNavigate2.css';
import photo from '../../Assets/mepicture.jpeg'

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
        newStyling()
	};

	return (
		<div className='details-wrapper-2'>
			<div className='links-wrappers'>
				<Link to='/about' className={first}>
					<span>About James</span>
                    {window.localStorage.getItem('about') == 'true' ? <img src={photo} className="picture-of-me" alt="photo of James" /> : null}
				</Link>
			</div>
			<div className='links-wrappers'>
				<Link to='/projects' className={second}>
					James' Projects
				</Link>
			</div>
			<div className='links-wrappers'>
				<Link to='/experience' className={third}>
					James' Experience
				</Link>
			</div>
			<div className='links-wrappers'>
				<Link to='/contact' className={fourth}>
					Contact James
				</Link>
			</div>
		</div>
	);
}

export default HomepageNavigate2;
