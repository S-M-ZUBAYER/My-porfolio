import React from 'react';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Home from './Home';
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import SocialLinks from './SocialLinks';
import Technologies from './Technologies';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Home />
            <About />
            <Portfolio />
            <Technologies></Technologies>
            {/* <Experience /> */}
            <Contact />
            <SocialLinks />

        </div>
    );
};

export default HomePage;