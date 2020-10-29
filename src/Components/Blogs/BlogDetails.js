import React from 'react';
import { Col } from 'react-bootstrap';

const BlogDetails = ({blog}) => {
    console.log(blog)
    return (
        <Col md={4}>
            <img className="project-img" src={blog.img} alt=""/>
            <h4>{blog.title}</h4>
            <p>{blog.description}</p>
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
            
        </Col>
    );
};

export default BlogDetails;