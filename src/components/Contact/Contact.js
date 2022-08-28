import React, { useEffect } from 'react';
import './Contact.css';
import email from '../../Assets/email.png'
import github from '../../Assets/GitHub-Mark-120px-plus.png'
import linkdin from '../../Assets/LI-In-Bug.png';

function Contact(props) {
	useEffect(() => {
		window.localStorage.setItem('contact', true);
	}, []);

	return (
		<div className='contact-wrapper'>
			<h3>Contact James</h3>
			<section className='contact-links'>
				<a
					href='mailto:stoppanij@gmail.com?subjext=Mail from Portfolio Website'
					target='_blank'
					aria-label='SendEmailLink'
					className='contact-link-email'>
					<img className='contact-img' src={email} alt='email-symbol' />
				</a>
				<a
					href='https://github.com/JamesStop'
					target='_blank'
					aria-label='GithubLink'
					className='contact-link-github'>
					<img className='contact-img' src={github} alt='github-symbol' />
				</a>
				<a
					href='https://www.linkedin.com/in/jamesstoppani/'
					target='_blank'
					aria-label='LinkdinLink'
					className='contact-link-linkdin'>
					<img className='contact-img' src={linkdin} alt='linkdin-symbol' />
				</a>
				<a
					href='mailto:stoppanij@gmail.com?subjext=Mail from Portfolio Website'
					target='_blank'
					aria-label='SendEmailLink'
					className='contact-link-email'>
					<img className='contact-img' src={email} alt='email-symbol' />
				</a>
			</section>
		</div>
	);
}

export default Contact;
