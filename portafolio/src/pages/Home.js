import React from "react";

import Header from "../components/Header";
import About from "../components/About";
import styleH from "./Home.module.css"
import Skill from "../components/Skill";
import Project from "../components/Project";
import Contact from "../components/Contact";


const Home = () => {
    return (
        <div className={styleH.home}>

        <section id="header">
          <Header />
        </section> 

        <section id="About">
        <About />
        </section>
        
        <section id="Skill">
        <Skill/>
        </section>
        
        <section id="Project">
        <Project />
        </section>
        
        <section id="Contact">
        <Contact />
        </section>
        
        </div>

    );
};

export default Home;