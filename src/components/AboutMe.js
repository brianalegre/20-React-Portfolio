import React from 'react';

function AboutMe() {
    const message = `Hi, I'm Brian Alegre!`;

    return (
        <div className="text-3xl font-bold underline text-green-300">
            <h2>{message}</h2>
        </div>
    );
}

export default AboutMe;