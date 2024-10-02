import React from "react";
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

const Main = () => {
    return (
        <div className="container">
            <Navbar />
            <Home />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default Main;