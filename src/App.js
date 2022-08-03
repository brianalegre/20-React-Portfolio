import './App.css';
import React, { useState } from "react";
import Header from "./components/Header"
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills"
import Tools from "./components/Tools"
import Project from "./components/Project";
import Contact from "./components/Contact";


// IMPORT LIST OF PROJECTS
import projects from './projects'

function App() {
  // return (
  //   <h1 className="text-3xl font-bold underline text-green-300">
  //     Hello world!
  //   </h1>
  // )
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Tools />
      <Project projects={projects} />
      <Contact />
    </div>
  );

}

export default App;
