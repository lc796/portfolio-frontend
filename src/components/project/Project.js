import React from 'react';
import {useParams} from "react-router-dom";
import projects from '../../data/projects.json';

const Project = () => {
    const {id} = useParams()
    const project = projects
        .filter(project => project.writeup) // filter by projects that have a writeup available
        .find(project => project.id === id); // find project by id from filtered list

    return (
        <div className="project-page-container">
            <h1>{project.name}</h1>
            <p>{project.writeup}</p>
        </div>
    );
};

export default Project;
