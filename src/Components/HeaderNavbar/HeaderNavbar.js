import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './HeaderNavbar.css'
const HeaderNavbar = () => {
    return (
        <div>
            <Navbar bg="transparent" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link className="my-nav-link home-link" style={{color:"#c2c1c1e7"}} href="#home">Home</Nav.Link>
                    <Nav.Link className="my-nav-link" style={{color:"#c2c1c1e7"}} href="#link">About</Nav.Link>
                    <Nav.Link className="my-nav-link" style={{color:"#c2c1c1e7"}} href="#link">Projects</Nav.Link>
                    <Nav.Link className="my-nav-link" style={{color:"#c2c1c1e7"}} href="#link">Resume</Nav.Link>
                    <Nav.Link className="my-nav-link" style={{color:"#c2c1c1e7"}} href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;