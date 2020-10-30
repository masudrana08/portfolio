import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Resume.css'
const Resume = () => {
    return (
        <div className='resume-container'>
            <Carousel>
                <Carousel.Item className="resume-img-container">
                    <img
                    className="d-block w-100 resume-img"
                    src="http://pngimg.com/uploads/laptop/laptop_PNG5941.png"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item className="resume-img-container">
                    <img
                    className="d-block w-100 resume-img"
                    src="http://pngimg.com/uploads/laptop/laptop_PNG5926.png"
                    alt="Third slide"
                    />

                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Resume;