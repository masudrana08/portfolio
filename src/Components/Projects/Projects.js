import React from 'react';
import { Row } from 'react-bootstrap';
import ProjectDetails from './ProjectDetails';
import {projectsData} from './projectsData'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Projects.css'

const Projects = () => {
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
                <div className="projects-container">
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
                  projectsData.map((project,index)=>{
                      return <ProjectDetails data={project} key={"project"+index}></ProjectDetails>
                  })
                  }
                  </Carousel>
                </div>
    );
};

export default Projects;