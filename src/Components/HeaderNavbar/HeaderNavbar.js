import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './HeaderNavbar.css'
import resume from './resume.pdf'
const HeaderNavbar = () => {

    return (
        <div>
            <Navbar fixed="top" b expand="lg" style={{background:"#2d313b"}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link  className="my-nav-link home-link" style={{color:"#c2c1c1e7"}} href="#home">
                        Home
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link" style={{color:"#c2c1c1e7"}} href="#about">
                        About
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link" style={{color:"#c2c1c1e7"}} href="#projects">
                        Projects
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link" style={{color:"#c2c1c1e7"}} href="#blog">
                        Blog
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link" style={{color:"#c2c1c1e7"}} href="#resume">
                        Resume
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link" style={{color:"#c2c1c1e7"}} href="#contact">
                        Contact
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link" style={{color:"#c2c1c1e7"}} href="#contact">
                        <a href={resume} download="resume.pdf">resume</a>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;