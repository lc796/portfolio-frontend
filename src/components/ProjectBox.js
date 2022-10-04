import {Fragment, useState} from "react";
import {faGithub, faJava, faJs, faReact, faPhp, faPython, faCss3, faHtml5, faGit} from '@fortawesome/free-brands-svg-icons'
import {faGlobe, faScroll} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TechLanguageTooltip from "./TechLanguageTooltip";

const ProjectBox = (props) => {
    const {id, name, description, languages, tooltip, links} = props.project;

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = (event) => {
        setIsHovering(true);
        console.log(event.target);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    const techUsed = languages.map((language) => {
        switch (language) {
            case "React":
                //return <li key={language}><img alt="React logo" src={react}/></li>;
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faReact}/></li>;
            case "HTML":
                //return <li key={language}><img alt="HTML logo" src={html}/></li>;
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faHtml5}/></li>;
            case "CSS":
                //return <li key={language}><img alt="CSS logo" src={css}/></li>;
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faCss3}/></li>;
            //case "Springboot":
                //return <li key={language}><img alt="Spring Boot logo" src={springboot}/></li>;
            //case "Apache":
                //return <li key={language}><img alt="Apache logo" src={apache}/></li>;
            //case "MySQL":
                //return <li key={language}><img alt="MySQL logo" src={mysql}/></li>;
            case "JS":
                //return <li key={language}><img alt="JavaScript logo" src={js}/></li>;
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faJs}/></li>;
            case "Git":
                //return <li key={language}><img alt="Git logo" src={git}/></li>;
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faGit}/></li>;
            case "Java":
                //return <li key={language}><img alt="Java logo" src={java}/></li>
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faJava}/></li>;
            //case "Minecraft":
                //return <li key={language}><img alt="Minecraft logo" src={minecraft}/></li>
            case "Python":
                //return <li key={language}><img alt="Python logo" src={python}/></li>
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faPython}/></li>;
            case "PHP":
                //return <li key={language}><img alt="PHP logo" src={php}/></li>
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faPhp}/></li>;
            //case "Flask":
                //return <li key={language}><img alt="Flask logo" src={flask}/></li>
            default:
                return <li key={language}></li>
        }
    });

    const renderContacts = () => {
        const github = links.github;
        const live = links.live;

        return <Fragment>
            <ul>
                {github && <li className="link github"><a href={github}><FontAwesomeIcon icon={faGithub}/></a></li>}
                {live && <li className="link live"><a href={live}><FontAwesomeIcon icon={faGlobe}/></a></li>}
            </ul>
        </Fragment>;
    };

    return (
        <div className="project" id={id}>
            <div className="project-head"><h3>{name}</h3></div>
            <div className="project-body">
                <ul>{techUsed}</ul>
                {
                    isHovering &&
                    <TechLanguageTooltip tooltip={tooltip}/>
                }
                <p>{description}</p>
            </div>
            <div className="project-footer">
                {renderContacts()}
            </div>
        </div>
    );
}

export default ProjectBox;