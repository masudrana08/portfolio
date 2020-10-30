import React from 'react';
import { Col } from 'react-bootstrap';
import './BlogDetails.css'
const BlogDetails = ({blog}) => {
    console.log(blog)
    return (
        <Col md={4} sm={6} xs={12}>
            <div className="blogDetails-container">
            <img className="project-img" src={blog.img} alt=""/>
            <h5>{blog.title}</h5>
            <small style={{fontSize:"13px"}}>{blog.description}</small>
            <div style={{display:'flex', justifyContent:"space-between"}}>
                <div>
                {
                    blog.technology.map((technology, index)=>{
                        return(
                            <p key={"tech"+index} className="skill-design">{technology}</p>
                        )
                    })
                }
                </div>
                <div>
                    <b>{blog.date}</b>
                </div>
            </div>
            </div>
            
        </Col>
    );
};

export default BlogDetails;