import React from 'react';
import './Credits.css'
import home from '../../Assets/home.png'
import email from '../../Assets/email.png'

function Credits(props) {
    return (
			<div className='credits-wrapper'>
				<h3 className='credits-head'>Symbol Attribution</h3>
				<ul>
					<li className='attribute-item'>
						<img className='attribute-img' src={home} alt='' />
						<p>
							<a
								href='https://www.flaticon.com/free-icons/home-button'
								title='home button icons'>
								Home button icons created by Freepik - Flaticon
							</a>
						</p>
					</li>
					<li className='attribute-item'>
						<img className='attribute-img' src={email} alt='' />
						<p>
							<a
								href='https://www.flaticon.com/free-icons/email'
								title='email icons'>
								Email icons created by Uniconlabs - Flaticon
							</a>
						</p>
					</li>
				</ul>
			</div>
		);
}

export default Credits;