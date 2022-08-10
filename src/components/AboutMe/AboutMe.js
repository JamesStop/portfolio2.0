import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AboutMe(props) {
	let renders = 0
    const navigate = useNavigate()

	useEffect(() => {
		renders += 1
		console.log(renders);
	}, []);


	return <div>about me</div>;
}

export default AboutMe;
