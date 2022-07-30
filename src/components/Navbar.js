import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const Navbar = () => {
    const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);


    const handleHamburgerMenu = () => {
        if (isHamburgerToggled) {
            setIsHamburgerToggled(false)
            return;
        }
        setIsHamburgerToggled(true);
    }

    return (
        <div className="Navbar">
            <nav className="nav">
                <a className="git-link" href="https://github.com/lc796"><FontAwesomeIcon className="nav-logo"
                                                                                         icon={faGithub}/></a>
                <div className="links-container">
                    <ul className="links">
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#projects">Projects</a></li>
                        <li><a href="/#contact">Contact</a></li>
                        <li className="hamburger">
                            <button onClick={handleHamburgerMenu}><FontAwesomeIcon icon={faBars}/></button>
                        </li>
                    </ul>
                </div>
                {/*<button>Login</button>*/}
            </nav>
            {isHamburgerToggled && <div className="hamburger-container">I love hamburger</div>}
        </div>
    );
}

export default Navbar;