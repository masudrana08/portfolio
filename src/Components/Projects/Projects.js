import React from 'react';
import { Row } from 'react-bootstrap';
import ProjectDetails from './ProjectDetails';
import {projectsData} from './projectsData'
const Projects = () => {
    return (
            <div className='container'>
                <Row>
                {
                projectsData.map((project,index)=>{
                    return <ProjectDetails data={project} key={"project"+index}></ProjectDetails>
                })
                }
                </Row>
            </div>
    );
};

export default Projects;