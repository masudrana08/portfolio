import React from 'react';
import { Col } from 'react-bootstrap';
import './BlogDetails.css'
const BlogDetails = ({blog}) => {
    console.log(blog)
    return (
        <Col md={4} sm={6} xs={12}>
            <div className="blogDetails-container">
                <img className="project-img" src={blog.img} alt=""/>

                <div style={{padding:"0 10px"}}>
                    <h5 className="mt-3">{blog.title}</h5>
                    <div style={{height:"80px"}}>
                        <small style={{fontSize:"13px"}}>{blog.description}</small>
                    </div>
                    <div style={{display:'flex', justifyContent:"space-between"}}>
                        <div>
                        {
                            blog.technology.map((technology, index)=>{
                                return(
                                    <p style={{padding:"5px 15px", fontSize:"12px", borderRadius:"30px"}} 
                                    key={"tech"+index} className="skill-design">{technology}</p>
                                )
                            })
                        }
                    </div>
                    <div>
                        <b>{blog.date}</b>
                    </div>
                    </div>
                </div>
            </div>
            
        </Col>
    );
};

export default BlogDetails;