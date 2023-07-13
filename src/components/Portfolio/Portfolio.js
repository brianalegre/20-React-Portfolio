// IMPORT
import React from 'react';
import { motion } from "framer-motion";

// IMPORT PICTURES
import oldEgg from "../images/projects/oldEgg.png";
import movieLibrary from "../images/projects/movieLibrary.png";
import techBlog from "../images/projects/techBlog.png";
import weatherDashboard from "../images/projects/weatherDashboard.png";
import pokemonQuiz from "../images/projects/pokemonQuiz.png";
import nofreetoes from "../images/projects/nofreetoes.png";


function Portfolio() {

    const project = [
        {
            projectName: "No Free Toes",
            projectImage: nofreetoes,
            projectDescription: "A full stack application using the MERN stack. It is a booking platform for service-based businesses like, 'Hair Cuts, Eye Lashes, etc...",
            deployed: "https://nofreetoes-v1-ba30a70603ff.herokuapp.com/",
            repo: "https://github.com/brianalegre/No-Free-Toes",
        },
        {
            projectName: "OldEgg",
            projectImage: oldEgg,
            projectDescription: "OldEgg is a full-stack e-commerce application for buying electronics",
            deployed: "https://oldegg.herokuapp.com/",
            repo: "https://github.com/brianalegre/OldEgg",
        },
        {
            projectName: "The Movie Library",
            projectImage: movieLibrary,
            projectDescription: "The Movie Library is front-end application where users can search and find information on the latest and/or popular movies",
            deployed: "https://brianalegre.github.io/Movie-Library/",
            repo: "https://github.com/brianalegre/Movie-Library",
        },
        {
            projectName: "Tech Blog",
            projectImage: techBlog,
            projectDescription: "Tech Blog is a full-stack application, where uesr can post their thoughts, and comment on other users' posts",
            deployed: "https://alegre-techblog.herokuapp.com/",
            repo: "https://github.com/brianalegre/14-MVC-Techblog",
        },
        {
            projectName: "Weather Dashboard",
            projectImage: weatherDashboard,
            projectDescription: "Weather Dashboard is a front-end application where users can search any city's weather",
            deployed: "https://brianalegre.github.io/06-Server-Side-APIs-Homework/",
            repo: "https://github.com/brianalegre/06-Server-Side-APIs-Homework",
        },
        {
            projectName: "Pokémon Quiz",
            projectImage: pokemonQuiz,
            projectDescription: "Pokémon Quiz is a front-end application where users guess the Pokémon's name, and earn points while doing so",
            deployed: "https://brianalegre.github.io/04-Web-APIs-Homework/",
            repo: "https://github.com/brianalegre/04-Web-APIs-Homework",
        },

    ]

    const projectsVariant = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        show: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1,
            bounce: 0.3,
            damping: 15,
            },
        },
    };
    
    const projectMap = project.map((projectItem, i) => (

        <motion.div 
        name='project' key={'project_' +i} 
        className="rounded-3xl shadow-lg bg-white max-w-sm mx-auto"
        initial={projectsVariant.hidden}
        whileInView={projectsVariant.show}
        viewport={{once:true}}
        >
            <div>
                <img className="rounded-t-3xl" src={projectItem.projectImage} alt="" />
            </div>
            <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{projectItem.projectName}</h5>
                <p className="text-gray-700 text-base mb-4 h-20">
                    {projectItem.projectDescription}
                </p>
            <div className='flex justify-around pt-5'>
                <button type="button" className="text-white w-28 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <a href={projectItem.repo} target="_blank" rel='noreferrer'>GitHub</a>
                </button>
                <button type="button" className="text-white w-28 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <a href={projectItem.deployed} target="_blank" rel='noreferrer'>Deployed</a>
                </button>
            </div>

                {/* <div className='flex justify-around'>
                    <a href={projectItem.repo} target="_blank" rel='noreferrer'>
                        <VscGithubAlt /> GitHub </a>
                    <a href={projectItem.deployed} target="_blank" rel='noreferrer'><i
                        className="fa fa-share-square-o"> Live </i></a>
                </div> */}
            </div>
        </motion.div>
    ))

    return (
        <section id="portfolio">
            <div className='text-center text-2xl'>
                <h1 className=' py-10'>Projects</h1>
            </div>
            <div className="grid gap-4 p-5
                sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
            ">
            {projectMap}
            </div>
        </section>
    );

}
export default Portfolio;


// UNUSED CODE

    // <section className='container bg-red-300 mx-auto'>
    //     <div className='text-center'>
    //         <h1>Projects</h1>
    //         <p>Some projects I've worked on</p>
    //         <br></br>
    //     </div>
    //     <div className='grid grid-cols-3 gap-4'>
    //         {project.map((projectItem) => (
    //             <div className='mx-auto'>
    //                 <h3>{projectItem.projectName}</h3>
    //             </div>
    //         ))}
    //     </div>
    // </section >

            
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

// NOTES
    // Use Props for Projects?
    // Use .map to call the Project Component multiple times
    // https://reactjs.org/docs/components-and-props.html