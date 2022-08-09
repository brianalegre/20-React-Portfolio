import React from 'react';

const project = [
    {
        projectName: "OldEgg",
        projectImage: ".././assets/projectImages/OldEgg.png",
        projectDescription: "OldEgg is a full-stack e-commerce application for buying electronics",
        deployed: "https://oldegg.herokuapp.com/",
        repo: "https://github.com/brianalegre/OldEgg",
    },
    {
        projectName: "The Movie Library",
        projectImage: ".././assets/projectImages/movieLibrary.png",
        projectDescription: "The Movie Library is front-end application where users can search and find information on the latest and/or popular movies",
        deployed: "https://brianalegre.github.io/Movie-Library/",
        repo: "https://github.com/brianalegre/Movie-Library",
    },
    {
        projectName: "Tech Blog",
        projectImage: ".././assets/projectImages/techBlog.png",
        projectDescription: "Tech Blog is a full-stack application, where uesr can post their thoughts, and comment on other users' posts",
        deployed: "https://alegre-techblog.herokuapp.com/",
        repo: "https://github.com/brianalegre/14-MVC-Techblog",
    },
    {
        projectName: "Weather Dashboard",
        projectImage: ".././assets/projectImages/weatherDashboard.png",
        projectDescription: "Weather Dashboard is a front-end application where users can search any city's weather",
        deployed: "https://brianalegre.github.io/06-Server-Side-APIs-Homework/",
        repo: "https://github.com/brianalegre/06-Server-Side-APIs-Homework",
    },
    {
        projectName: "Pokémon Quiz",
        projectImage: ".././assets/projectImages/pokemonQuiz.png",
        projectDescription: "Pokémon Quiz is a front-end application where users guess the Pokémon's name, and earn points while doing so",
        deployed: "https://brianalegre.github.io/04-Web-APIs-Homework/",
        repo: "https://github.com/brianalegre/04-Web-APIs-Homework",
    },
    {
        projectName: "Password Generator",
        projectImage: ".././assets/projectImages/passwordGenerator.png",
        projectDescription: "Password Generator is a front-end application where users can generate a random password based on the criteria they set",
        deployed: "https://brianalegre.github.io/03-JavaScript-Homework/",
        repo: "https://github.com/brianalegre/03-JavaScript-Homework",
    },
]

const projectMap = project.map((projectItem, i) => (
    <div className="rounded-lg shadow-lg bg-white max-w-sm mx-auto">
        <a href="#!">
            <img className="rounded-t-lg" key={'projectImage_'+ i} src={projectItem.projectImage} alt="" />
        </a>
        <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2" key={'projectName_'+ i} >{projectItem.projectName}</h5>
            <p className="text-gray-700 text-base mb-4" key={'projectDescription_'+ i}>
                {projectItem.projectDescription}
            </p>
            <div className='flex justify-around'>
                <a key={'projectRepo_'+ i} href={projectItem.repo} target="_blank" rel='noreferrer'><i
                    className="fa fa-github hvr-icon"> GitHub </i></a>
                <a key={'projectDeployed_'+ i} href={projectItem.deployed} target="_blank" rel='noreferrer'><i
                    className="fa fa-share-square-o"> Live </i></a>
            </div>
        </div>
    </div>
))

function Projects() {
    return (
        <section className='border-solid'>
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

export default Projects;


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