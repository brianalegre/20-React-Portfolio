// Use Props for Projects?
// Use .map to call the Project Component multiple times
// https://reactjs.org/docs/components-and-props.html

import React from 'react';

export default function Projects({ projects }) {
    return (
        <div>
            <ul>
                {projects.map((project) => (
                    <li>
                        {`${project.projectName} ${project.deployed} ${project.repo}`}
                    </li>
                ))}
            </ul>
        </div>
    );
}