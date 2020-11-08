import React from 'react';
import Carousel from "react-multi-carousel";
import BlogDetails from './BlogDetails';
import {blogsData} from './blogsData'
import './Blogs.css'
const Blogs = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <div className="blogs-container">
            <h1 className="blog-section-title"><span style={{color:"white"}}>Some of  my </span>Blogs...</h1>
                  <Carousel   responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    infinite={true}
                    autoPlay={false}
                    keyBoardControl={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                  {
                  blogsData.map((blog,index)=>{
                      return <BlogDetails data={blog} key={"blog"+index}></BlogDetails>
                  })
                  }
                  </Carousel>
                </div>
    );
};

export default Blogs;