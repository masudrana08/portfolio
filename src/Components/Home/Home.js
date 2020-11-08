import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import './Home.css'

const Home = () => {
    return (
        <div id="home" className="home-container">
            <Header></Header>
            
            <div id="about" className="container">
                <About></About>
            </div>

            <div id="projects">
                <Projects></Projects>
            </div>

            <div id="blog">
                <Blogs></Blogs>
            </div>


            <div id="contact">
                <Contact></Contact>
            </div>
            
        </div>
    );
};

export default Home;