// Use Props for Projects?
// Use .map to call the Project Component multiple times
// https://reactjs.org/docs/components-and-props.html

import React from 'react';

const project = [
    {
        projectName: "OldEgg",
        projectImage: "./src/assets/projectImage/OldEgg.png",
        deployed: "https://oldegg.herokuapp.com/",
        repo: "https://github.com/brianalegre/OldEgg",
    },
    {
        projectName: "The Movie Library",
        projectImage: "./src/assets/projectImage/movieLibrary.png",
        deployed: "https://brianalegre.github.io/Movie-Library/",
        repo: "https://github.com/brianalegre/Movie-Library",
    },
    {
        projectName: "Tech Blog",
        projectImage: "TBD",
        deployed: "https://alegre-techblog.herokuapp.com/",
        repo: "https://github.com/brianalegre/14-MVC-Techblog",
    },
    {
        projectName: "Weather Dashboard",
        projectImage: "./src/assets/projectImage/weatherDashboard.png",
        deployed: "https://brianalegre.github.io/06-Server-Side-APIs-Homework/",
        repo: "https://github.com/brianalegre/06-Server-Side-APIs-Homework",
    },
    {
        projectName: "Pokémon Quiz",
        projectImage: "./src/assets/projectImage/pokemonQuiz.png",
        deployed: "https://brianalegre.github.io/04-Web-APIs-Homework/",
        repo: "https://github.com/brianalegre/04-Web-APIs-Homework",
    },
    {
        projectName: "Password Generator",
        projectImage: "./src/assets/projectImage/passwordGenerator.png",
        deployed: "https://brianalegre.github.io/03-JavaScript-Homework/",
        repo: "https://github.com/brianalegre/03-JavaScript-Homework",
    },
]

// export default function Projects {
//     return (
//         <div>
//             <ul>
//                 {project.map((projectItem) => (
//                     <li>
//                         {`${projectItem} ${projectItem.deployed} ${project.repo}`}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

function Projects() {
    return (
        <section>
            <h1>Projects</h1>
            <p>Some projects I've worked on</p>
            <div>
                {project.map((projectItem) => (
                    <ul>
                        <li>{projectItem.projectName}</li>
                    </ul>
                ))}
            </div>
        </section >
    );
}

export default Projects;