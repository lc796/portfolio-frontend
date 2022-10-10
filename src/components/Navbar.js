import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import Hamburger from "./Hamburger";
import Links from "./Links";

const Navbar = () => {
    const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);


    const handleHamburgerMenu = () => {
        setIsHamburgerToggled(!isHamburgerToggled);
    }

    const links = [
        {name: "about", url: "/#about"},
        {name: "projects", url: "/#projects"},
        {name: "contact", url: "/#contact"}
    ]

    return (
        <div className="Navbar">
            <nav className="nav">
                <a className="git-link" href="https://github.com/lc796"><FontAwesomeIcon className="nav-logo"
                                                                                         icon={faGithub}/></a>
                <div className="links-container">
                    <ul className="links">
                        <Links links={links}/>
                        <li className="hamburger">
                            <button onClick={handleHamburgerMenu}><FontAwesomeIcon icon={faBars}/></button>
                        </li>
                    </ul>
                </div>
            </nav>
            {isHamburgerToggled && <Hamburger links={links}/>}
        </div>
    );
}

export default Navbar;