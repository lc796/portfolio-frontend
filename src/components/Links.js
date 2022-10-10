import {Fragment} from "react";

const Links = () => {
    const links = [
        {name: "about", url: "/#about"},
        {name: "projects", url: "/#projects"},
        {name: "contact", url: "/#contact"}
    ]

    return (
        <Fragment>
            <li><a href={links[0].url}>{links[0].name}</a></li>
            <li><a href={links[1].url}>{links[1].name}</a></li>
            <li><a href={links[2].url}>{links[2].name}</a></li>
        </Fragment>
    )
}

export default Links;