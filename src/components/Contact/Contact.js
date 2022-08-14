import React, { useEffect } from 'react';

function Contact(props) {
	useEffect(() => {
		window.localStorage.setItem('contact', true);
	}, []);

	return <div>contact</div>;
}

export default Contact;
