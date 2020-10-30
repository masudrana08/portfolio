import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MyInfo from './MyInfo';
import Skills from './Skills';
import "./About.css"
const About = () => { 
    return (
        <div className="about-container">
            <Row>
                <Col md={6} xs={12}>
                    <MyInfo></MyInfo>
                </Col>
                <Col md={6} xs={12}>
                <Skills></Skills>
                </Col>
            </Row>
        </div>
    );
};

export default About;