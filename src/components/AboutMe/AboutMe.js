import React from 'react';

const message = `Hi, I'm Brian Alegre!`;
const intro = `I love the fact that I can break things with Web Development, figuring out how it works, and
also how to improve it, all while learning.
I also love how Web Development is a great creative outlet for me. If its something I can
imagine, I can bring it to life, and that iteslf if beautiful`

const selfie = '.././assets/logo/selfie.jpg'

function AboutMe() {

    return (
        <div className="text-3xl text-stone-200">
            <h2>{message}</h2>
            <p>
                {intro}
            </p>
        </div>
    );
}

export default AboutMe;