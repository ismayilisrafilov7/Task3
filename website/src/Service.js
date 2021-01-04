import React, { Component } from 'react';
import { Card, CardDeck,Button } from "react-bootstrap";
import Travel from "./images/Travel000-2000x1200-1.jpg";
import House from "./images/screenshot_1.png";
import Maps from "./images/world-map-doodle-260nw-598322657.jpg"


class Service extends Component {
    render() {
        return (
            <div id="ser" className="tser">
                    <h1>SERVICES</h1>

                <div className="container">
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Travel} />
                        <Card.Body>
                        <Card.Title>Travel</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem dolore odit dolores natus magni ab, alias voluptas sapiente a!
                        </Card.Text>
                        <Button href="#home" variant="info" size="lg">Click</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={House} />
                        <Card.Body>
                        <Card.Title>House</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem dolore odit dolores natus magni ab, alias voluptas sapiente a!
                        </Card.Text>
                        <Button href="#home" variant="info" size="lg">Click</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Maps} />
                        <Card.Body>
                        <Card.Title>Maps</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem dolore odit dolores natus magni ab, alias voluptas sapiente a!
                        </Card.Text>
                        <Button href="#home" variant="info" size="lg">Click</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
                
                </div>
            </div>
        )
    }
}

export default Service
