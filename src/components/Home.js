import React from 'react';
import Splash from "./Splash";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
    return (
        <div>
            <Splash />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
