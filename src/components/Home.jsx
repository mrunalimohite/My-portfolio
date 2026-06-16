import React, { useState, useEffect } from "react";
import "./Home.css";
import profileImg from "../assets/profile-pic.jpeg";
import {
FaGithub,
FaLinkedinIn,
FaEnvelope,
FaLocationDot,
} from "react-icons/fa6"; 
function Home() {
    return(
        <section className="homeSection" id="home" >
            <div className="home-content">
                <p className="role">Frontend Developer</p>
                <h1>Hello, I'm <br /> <span className="name">Mrunali Mohite</span></h1>
                <p className="home-tagline">I build responsive, pixel-perfect web experiences with clean code and modern design.</p>
                <div className="home-socials">
                    <span><FaLocationDot className="social-icon" />Sion, Mumbai | Maharashtra </span>
                    <span><FaEnvelope className="social-icon" /> mrunalimohite24@gmail.com</span>
                </div>
                <div className="home-actions">
                    <a href="#projects" className="btn btn-primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Hire Me
                    </a>
                </div>
                <div className="social-row">
                    <a href="https://github.com/mrunalimohite" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mrunalimohite" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                    <a href="mailto:mrunalimohite24@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
            <div className="home-visual"> 
                <div className="avatar-ring"> 
                    <div className="avatar-inner"> 
                        <img
                          src={profileImg}
                          alt="Mrunali Mohite"
                          className="profile-img"
                        />
                    </div> 
                </div>
                <div className="floating-badge badge-html"> HTML5 </div> 
                <div className="floating-badge badge-js"> JS </div> 
                <div className="floating-badge badge-php"> PHP </div> 
            </div>
        </section> 
    )
}

export default Home;