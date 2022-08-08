// Use Props for Projects?
// Use .map to call the Project Component multiple times
// https://reactjs.org/docs/components-and-props.html

import React from 'react';

const project = [
    {
        projectName: "OldEgg",
        projectImage: ".././assets/projectImages/OldEgg.png",
        projectDescription: "",
        deployed: "https://oldegg.herokuapp.com/",
        repo: "https://github.com/brianalegre/OldEgg",
    },
    {
        projectName: "The Movie Library",
        projectImage: ".././assets/projectImages/movieLibrary.png",
        projectDescription: "",
        deployed: "https://brianalegre.github.io/Movie-Library/",
        repo: "https://github.com/brianalegre/Movie-Library",
    },
    {
        projectName: "Tech Blog",
        projectImage: "TBD",
        projectDescription: "",
        deployed: "https://alegre-techblog.herokuapp.com/",
        repo: "https://github.com/brianalegre/14-MVC-Techblog",
    },
    {
        projectName: "Weather Dashboard",
        projectImage: ".././assets/projectImages/weatherDashboard.png",
        projectDescription: "",
        deployed: "https://brianalegre.github.io/06-Server-Side-APIs-Homework/",
        repo: "https://github.com/brianalegre/06-Server-Side-APIs-Homework",
    },
    {
        projectName: "Pokémon Quiz",
        projectImage: ".././assets/projectImages/pokemonQuiz.png",
        projectDescription: "",
        deployed: "https://brianalegre.github.io/04-Web-APIs-Homework/",
        repo: "https://github.com/brianalegre/04-Web-APIs-Homework",
    },
    {
        projectName: "Password Generator",
        projectImage: ".././assets/projectImages/passwordGenerator.png",
        projectDescription: "",
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
        // <section className='container bg-red-300 mx-auto'>
        //     <div className='text-center'>
        //         <h1>Projects</h1>
        //         <p>Some projects I've worked on</p>
        //         <br></br>
        //     </div>
        //     <div className='grid grid-cols-3 gap 4'>
        //         {project.map((projectItem) => (
        //             <div className='mx-auto'>
        //                 <h3>{projectItem.projectName}</h3>
        //             </div>
        //         ))}
        //     </div>
        // </section >

        project.map((projectItem) => (
            <div class="flex justify-center">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img class="rounded-t-lg" src={projectItem.projectImage} alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">{projectItem.projectName}</h5>
                        <p class="text-gray-700 text-base mb-4">
                            {projectItem.projectDescription}
                        </p>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">GitHub</button>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Live</button>
                    </div>
                </div>
            </div>
        ))

    );

}

export default Projects;