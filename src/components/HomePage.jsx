import React from 'react';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Home from './Home';
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import SocialLinks from './SocialLinks';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Home />
            <About />
            <Portfolio />
            <Experience />
            <Contact />
            <SocialLinks />

        </div>
    );
};

export default HomePage;