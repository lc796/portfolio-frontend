import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhoneSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-container">
                <div id="footer-wrapper">
                    <a href="https://github.com/lc796"><FontAwesomeIcon className="footer-social-icon" icon={faGithub}/></a>
                    <a href="https://linkedin.com/in/luke-collishaw-2240a4159"><FontAwesomeIcon className="footer-social-icon" icon={faLinkedin}/></a>
                </div>
                <div><a href="mailto:lukecollishaw@gmail.com"><FontAwesomeIcon className="footer-social-icon" icon={faEnvelope}/></a> lukecollishaw@gmail.com</div>
                <div><FontAwesomeIcon className="footer-social-icon" icon={faPhoneSquare}/> 07539696081</div>
            </div>
        </div>
    );
}

export default Footer;