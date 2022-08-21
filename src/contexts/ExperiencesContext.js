import React, { createContext, useEffect, useState } from 'react';
import EpollLogo from '../Assets/EPollLogo.jpg'

const ExperiencesContext = createContext();

function ExperiencesContextProvider({children}) {
	const [experiences, setExperiences] = useState([]);

    const experiencesData = [
			{
				companyName: 'E-Poll Market Research',
				companyLogo: EpollLogo,
				position: 'Survey Programmer',
				duration: '2018 - 2021',
				jobDescription:
					"Programmed, and ensured the quality of all custom side surveys in the company's personal programming language, while helping out in data checking and processing where need be.",
				companyLink: 'https://www.epollsurveys.com/epoll/clients/index.htm',
			},
			{
				companyName: 'E-Poll Market Research',
				companyLogo: EpollLogo,
				position: 'Survey Programmer',
				duration: '2018 - 2021',
				jobDescription:
					"Programmed, and ensured the quality of all custom side surveys in the company's personal programming language, while helping out in data checking and processing where need be.",
				companyLink: 'https://www.epollsurveys.com/epoll/clients/index.htm',
			},
		];

	useEffect(() => {
		setExperiences(experiencesData);
	}, []);

	return (
		<ExperiencesContext.Provider value={experiences}>
			{children}
		</ExperiencesContext.Provider>
	);
}

export { ExperiencesContext, ExperiencesContextProvider };
