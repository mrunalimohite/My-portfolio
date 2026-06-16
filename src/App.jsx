import { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
