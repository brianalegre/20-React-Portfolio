import React from 'react';
// import Marquee from "react-fast-marquee";

import './Skills.css'
// import { skillsImage } from './skillsImage'


const skills = [
    'HTML',
    'CSS',
    'Figma',
    'Javascript',
    'React',
    'Node JS',

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

//     return (
//         <div className="skills">
//             <div className="skillsHeader">
//                 <h2>Skills</h2>
//             </div>
//             <div className="skillsContainer">
//                 <div className="skill--scroll">
//                     <Marquee
//                         gradient={false}
//                         speed={80}
//                         pauseOnHover={true}
//                         pauseOnClick={true}
//                         delay={0}
//                         play={true}
//                         direction="left"
//                     >
//                         {skillsData.map((skill, id) => (
//                             <div className="skill--box" key={id}>
//                                 {/* <img src={skillsImage(skill)} alt={skill} /> */}
//                                 <h3>
//                                     {skill}
//                                 </h3>
//                             </div>
//                         ))}
//                     </Marquee>
//                 </div>
//             </div>
//         </div>
//     )
}

export default Skills;