import {Fragment, useState} from "react";
import {faGithub, faJava, faJs, faReact, faPhp, faPython, faCss3, faHtml5, faGit} from '@fortawesome/free-brands-svg-icons'
import {faDatabase, faGlobe} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TechLanguageTooltip from "./TechLanguageTooltip";

const ProjectBox = (props) => {
    const {id, name, description, languages, tooltip, links, tag} = props.project;

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
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faReact}/></li>;
            case "HTML":
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faHtml5}/></li>;
            case "CSS":
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faCss3}/></li>;
            case "MySQL":
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faDatabase}/></li>;
            case "JS":
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faJs}/></li>;
            case "Git":
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faGit}/></li>;
            case "Java":
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faJava}/></li>;
            case "Python":
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faPython}/></li>;
            case "PHP":
                return <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={language}><FontAwesomeIcon icon={faPhp}/></li>;
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
                <ul className="project-tech-used">{techUsed}</ul>
                {
                    isHovering &&
                    <TechLanguageTooltip tooltip={tooltip}/>
                }
                <p>{description}</p>
                <div className="tag">{tag}</div>
            </div>
            <div className="project-footer">
                {renderContacts()}
            </div>
        </div>
    );
}

export default ProjectBox;