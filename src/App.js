import './App.css';
import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";

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
      <AboutMe />
      <Project projects={projects} />
    </div>
  );

}

export default App;
