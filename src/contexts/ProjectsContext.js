import React, { createContext, useState} from 'react';
export const ProjectsContext = createContext()



function ProjectsContextProvider (props) {
    const DEFAULT_PROJECTSDATA_LAYOUT = {
        projectTitle: '',
        projectDescription: '',
        projectImgSrc:'',
        projectLinks: {
            frontendSite: '',
            frontendGithub: '',
            backendSite: '',
            backendGithub: '',
        }
    }
    const projectsData = [{

    }]
    const [projects, setProjects] = useState(projectsData)
    return (
        <ProjectsContext.Provider value={projects}></ProjectsContext.Provider>
    );
}

export default ProjectsContext;