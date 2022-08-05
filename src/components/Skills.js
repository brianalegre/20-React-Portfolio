import React from 'react';

const skills = [
    {
        skillName: "HTML5",
        skillPicture: "TBD"
    },
    {
        skillName: "CSS",
        skillPicture: "TBD"
    },
    {
        skillName: "JavaScript",
        skillPicture: "TBD"
    },
    {
        skillName: "Node.js",
        skillPicture: "TBD"
    },
    {
        skillName: "Express",
        skillPicture: "TBD"
    },
    {
        skillName: "jQuery",
        skillPicture: "TBD"
    },
    {
        skillName: "NoSQL",
        skillPicture: "TBD"
    },
    {
        skillName: "React.js",
        skillPicture: "TBD"
    },
    {
        skillName: "MySQL",
        skillPicture: "TBD"
    },
    {
        skillName: "tailwindcss",
        skillPicture: "TBD"
    },

]

function Skills() {
    return (
        <section>
            <h1>Skills</h1>
            <p>Below are the skills I have learned thus far</p>

            {skills.map((skillItems) => (
                <div>
                    <h3>{skillItems.skillName} </h3>
                </div>
            ))}
        </section >
    );
}

export default Skills;