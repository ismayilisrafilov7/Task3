import React, { Component } from 'react';
import {Form,Button,Row,Col} from "react-bootstrap"

class Contact extends Component {
    render() {
        return (
            <div id="con" className="tcon">
            <div className="container">
            <Form>
            <Row>
            <Col>
            <Form.Control placeholder="First name" />
            </Col>
             <Col>
            <Form.Control placeholder="Last name" />
        </Col>
        </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label >Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
               <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button href="#home" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
            </div>
            </div>
        )
    }
}

export default Contact

