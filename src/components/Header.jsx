import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const handleScroll = () => {
            let currentSection = "home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 120;
                const sectionHeight = section.offsetHeight;
                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    currentSection = section.getAttribute("id");
                }
            });
            setActiveSection(currentSection);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const navLinks = ["home","about","services","projects","skills","contact",];
    return (
        <header className="header">
            <a href="#home" className="logo">
                MM<span>.</span>
            </a>
    
            <nav className={`navbar ${menuOpen ? "open" : ""}`}>
                {/* <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a> */}
                {navLinks.map((link) => ( 
                    <a key={link} href={`#${link}`} className={activeSection === link ? "active" : ""} onClick={() => setMenuOpen(false)} > 
                        {link.charAt(0).toUpperCase() + link.slice(1)} 
                    </a> 
                ))}
            </nav>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
        </header>
    );
}

export default Header;