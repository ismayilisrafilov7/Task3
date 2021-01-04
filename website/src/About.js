import React, { Component } from 'react';
import Setting from "./images/gear.svg";
import Gift from "./images/giftbox.svg";
import Cup from "./images/trophy.svg";
class About extends Component {
    render() {
        return (
            <div id="about" className="tabout">
                <h1>ABOUT</h1>
                <div className="container">
                    <ul>
                        <img src={Setting} alt="" srcset=""/>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, dolore!</li>
                    </ul>
                    <ul>
                        <img src={Gift} alt="" srcset=""/>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, deleniti.</li>
                    </ul>
                    <ul>
                        <img src={Cup} alt="" srcset=""/>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, unde!</li>
                    </ul>
                
                </div>
            </div>
        )
    }
}

export default About
