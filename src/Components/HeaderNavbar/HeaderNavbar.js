
import React from 'react';
import {Button, Nav, Navbar} from 'react-bootstrap';
import './HeaderNavbar.css'
import resume from '../resume.pdf'
const HeaderNavbar = () => {

    return (
        <div>
            <Navbar fixed="top" b expand="lg" className="navbar-bg" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{fontSize:"15px"}} />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto nav-bg" >
                    <Nav.Link  className="my-nav-link home-link" style={{color:"#c2c1c1e7"}} href="#home">
                        Home
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link about-link" style={{color:"#c2c1c1e7"}} href="#about">
                        About
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link projects-link" style={{color:"#c2c1c1e7"}} href="#projects">
                        Projects
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link blog-link" style={{color:"#c2c1c1e7"}} href="#blog">
                        Blog
                    </Nav.Link>
                    {/* <Nav.Link   className="my-nav-link resume-link" style={{color:"#c2c1c1e7"}} href="#resume">
                        Resume
                    </Nav.Link> */}
                    <Nav.Link  className="my-nav-link contact-link" style={{color:"#c2c1c1e7"}} href="#contact">
                        Contact
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link resume-download-link" style={{color:"#c2c1c1e7"}} href="#contact">
                        <a href={resume} download="resume.pdf">
                            <Button className="btn btn-sm" style={{background:"#e31b6d", outline:"none", border:"none"
                        , borderRadius:"40px"}}>Resume</Button>
                        </a>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;