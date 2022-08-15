import React, { createContext, useEffect, useState } from 'react';

const ExperiencesContext = createContext();

function ExperiencesContextProvider({children}) {
	const [experiences, setExperiences] = useState([]);

    const experiencesData = [
			{
				companyName: 'E-Poll Market Research',
				companyLogo: '',
				position: 'Survey Programmer',
				duration: '2018 - 2021',
				jobDescription:
					"Job Description: Programmed, and ensured the quality of all custom side surveys in the company's personal programming language, while helping out in data checking and processing where need be.",
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
