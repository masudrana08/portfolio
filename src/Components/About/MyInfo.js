import React from 'react';
import { Button } from 'react-bootstrap';

const MyInfo = () => {
    return (
        <div style={{marginBottom:"50px"}}>
            <img style={{width:"300px"}} src="https://image.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg" alt=""/>
            <h6 style={{fontSize:"15"}}>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</h6>
            <a href="#contact">
            <Button className="btn btn-sm" style={{background:"#e31b6d", outline:"none", border:"none"
                , borderRadius:"8px"}}>Contact Me</Button>
            </a>
        </div>
    );
};

export default MyInfo;