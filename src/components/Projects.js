import ProjectBox from './ProjectBox';
// Import projects data
import projects from '../data/projects.json';

const Projects = () => {
    const projectList = projects.map((project) => <ProjectBox key={project.id} project={project} />)

    return (
        <div className="Projects" id="projects">
            <div className="wrapper">
                <h1>Projects</h1>
                <hr/>
                <div className="projects-container">
                    {projectList}
                </div>
            </div>
        </div>
    );
}

export default Projects;