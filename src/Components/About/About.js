import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MyInfo from './MyInfo';
import Skills from './Skills';
const About = () => { 
    return (
        <div>
            <Row>
                <Col>
                    <MyInfo></MyInfo>
                </Col>
                <Col>
                <Skills></Skills>
                </Col>
            </Row>
        </div>
    );
};

export default About;