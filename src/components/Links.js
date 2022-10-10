import {Fragment} from "react";

const Links = (props) => {
    const links = props.links

    return (
        <Fragment>
            <li><a href={links[0].url}>{links[0].name}</a></li>
            <li><a href={links[1].url}>{links[1].name}</a></li>
            <li><a href={links[2].url}>{links[2].name}</a></li>
        </Fragment>
    )
}

export default Links;