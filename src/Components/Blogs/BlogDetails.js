import React from 'react';
import { Col } from 'react-bootstrap';
import './BlogDetails.css'
const BlogDetails = ({data}) => {
    console.log(data)
    return (
        <div className="projectDetails-container">
            <div>
            <div className="project-img" style={{background:`url("${data.img}")`,backgroundSize:"cover"}}>
                    <div style={{padding:"20px"}} className="project-description">
                    {/* <h5 style={{fontSize:"18px"}}>{data.title}</h5> */}
                        <div className="mb-3" >
                            <small style={{fontSize:"13px"}}>{data.description}</small>
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                            <div className='' >
                                {
                                    data.technology.map((technology, index)=>{
                                        return(
                                            <h6 style={{padding:"3px 10px", margin:"2px 3px", fontSize:"12px", background:"#20d4aa",color:"black"}} 
                                            key={"comfort"+index} className="skill-design">{technology}</h6>
                                        )
                                    })
                                }
                            </div>

                            <div className="mt-1 ml-1" style={{borderTop:"1px solid #234677ef"}}>
                                <a  style={{color:"#64ffda"}}   rel='noreferrer' href={data.clientRepo} target="_blank">
                                    {/* <GitHubIcon /> */}
                                </a>
                                <a  style={{color:"#64ffda"}} className="ml-3" rel='noreferrer' href={data.liveLink} target="_blank">
                                    {/* <LinkIcon /> */}
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
            <h5 className="blog-details-title" >{data.title}</h5>
            </div>
        </div>
    );
};

export default BlogDetails;