import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact-container'>
            <Form className='form-container'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button style={{background:"#e31b6d",border:"none", outline:"none" }}
                className='btn custom-button' type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Contact;