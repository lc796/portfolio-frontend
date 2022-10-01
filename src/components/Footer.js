import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhoneSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="wrapper">
                <a href="https://github.com/lc796"><FontAwesomeIcon className="footer-social-icon" icon={faGithub}/></a>
                <a href="linkedin.com/in/luke-collishaw-2240a4159"><FontAwesomeIcon className="footer-social-icon" icon={faLinkedin}/></a>
                <a href="mailto:lukecollishaw@gmail.com"><FontAwesomeIcon className="footer-social-icon" icon={faEnvelope}/></a> lukecollishaw@gmail.com
                <FontAwesomeIcon className="footer-social-icon" icon={faPhoneSquare}/> 07539696081
            </div>
        </div>
    );
}

export default Footer;