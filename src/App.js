import './App.css';
import React, { useState } from "react";
import Header from "./components/Header/Header"
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills"
import Tools from "./components/Skills/Tools"
import Project from "./components/Project/Project";
// import Contact from "./components/Contact/Contact";
import Logo from "./components/Logo/Logo"
import Footer from "./components/Footer/Footer"


// IMPORT LIST OF PROJECTS
// import projects from './projects'

function App() {
  // return (
  //   <h1 className="text-3xl font-bold underline text-green-300">
  //     Hello world!
  //   </h1>
  // )
  return (
    <div className='bg-stone-900'>
      {/* <Logo /> */}
      <Header />
      <AboutMe />
      {/* <Skills /> */}
      <Project />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
