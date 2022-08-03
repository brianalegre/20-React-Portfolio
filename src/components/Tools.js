import React from 'react';

const tools = [
    {
        toolName: "Visual Studio Code",
        toolPicture: "TBD"
    },
    {
        toolName: "GitHub",
        toolPicture: "TBD"
    },
    {
        toolName: "Slack",
        toolPicture: "TBD"
    },
    {
        toolName: "AWS S3",
        toolPicture: "TBD"
    },
    {
        toolName: "Heroku",
        toolPicture: "TBD"
    },
    {
        toolName: "NPM",
        toolPicture: "TBD"
    },
]

function Tools() {
    return (
        <section>
            <h1>Tools</h1>
            <p>My everyday tools</p>

            {tools.map((toolItems) => (
                <div>
                    <h3>{toolItems.toolName} </h3>
                </div>
            ))}
        </section >
    );
}

export default Tools;