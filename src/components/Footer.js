import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhoneSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="wrapper">
                <a href="#"><FontAwesomeIcon className="footer-social-icon" icon={faGithub}/></a>
                <a href="#"><FontAwesomeIcon className="footer-social-icon" icon={faLinkedin}/></a>
                <a href="#"><FontAwesomeIcon className="footer-social-icon" icon={faEnvelope}/></a>
                <a href="#"><FontAwesomeIcon className="footer-social-icon" icon={faPhoneSquare}/></a>
            </div>
        </div>
    );
}

export default Footer;