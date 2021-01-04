import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./index.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact"

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Service/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App;
