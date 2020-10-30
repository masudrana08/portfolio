import React from 'react';
import './ProjectDetails.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
const ProjectDetails = ({data}) => {
    return (
        <div className="projectDetails-container">
            <img className="project-img" src={data.img} alt=""/>
            
            <div style={{padding:"20px"}}>
                <h5 style={{fontSize:"18px"}}>{data.title}</h5>
                <div className="mb-3" style={{height:"62px"}}>
                    <small style={{fontSize:"13px"}}>{data.description}</small>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div className='my-1'>
                    {
                        data.technology.map((technology, index)=>{
                            return(
                                <p style={{padding:"3px 10px", margin:"2px 3px", fontSize:"12px", background:"#4b5769"}} 
                                key={"comfort"+index} className="skill-design">{technology}</p>
                            )
                        })
                    }
                    </div>
                    <div className="mt-1" style={{borderTop:"1px solid #234677ef"}}>
                        
                        <a  style={{color:"#64ffda"}}   rel='noreferrer' href={data.clientRepo} target="_blank">
                            <GitHubIcon />
                        </a>
                        <a  style={{color:"#64ffda"}} className="ml-3" rel='noreferrer' href={data.liveLink} target="_blank">
                            <LinkIcon />
                        </a>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ProjectDetails;