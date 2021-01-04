import React, { Component } from 'react';
import { Button } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div id="home" className="thome">
                <div className="container-fluid">
                <h1 >WELCOME TWEBSITE</h1>
                <Button href="#ser" variant="info" size="lg">Click</Button>
                </div>
            </div>
        )
    }
}

export default Home
