import React from 'react';
import { Row } from 'react-bootstrap';
import BlogDetails from './BlogDetails';
import {blogsData} from './blogsData'
const Blogs = () => {
    return (
        <div className='container'>
                <Row>
                {
                blogsData.map((blog,index)=>{
                    return <BlogDetails key={"blog"+index} blog={blog}></BlogDetails>
                })
                }
                </Row>
            </div>
    );
};

export default Blogs;