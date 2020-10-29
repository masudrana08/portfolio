import React from 'react';
import { Col } from 'react-bootstrap';
import './ProjectDetails.css'
const ProjectDetails = ({data}) => {
    return (
        <Col md={4}>
            <img className="project-img" src={data.img} alt=""/>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
            <div style={{display:'flex', flexDirection:'column'}}>
                <div>
                {
                    data.technology.map((technology, index)=>{
                        return(
                            <p key={"comfort"+index} className="skill-design">{technology}</p>
                        )
                    })
                }
                </div>
                <div>
                    <a rel='noreferrer' href={data.liveLink} target="_blank">Live Site</a>
                    <a rel='noreferrer' href={data.clientRepo} target="_blank">Client Repository</a>
                    <a rel='noreferrer' href={data.serverRepo} target="_blank">Server Repository</a>
                </div>
            </div>
            
        </Col>
    );
};

export default ProjectDetails;