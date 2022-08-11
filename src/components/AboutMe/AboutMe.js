import React from 'react';

const intro = `I love the fact that I can break things with Web Development, figuring out how it works, and
also how to improve it, all while learning.
I also love how Web Development is a great creative outlet for me. If its something I can
imagine, I can bring it to life, and that iteslf is beautiful`

const selfie = '.././assets/logo/selfie.jpg'

function AboutMe() {

    return (
        <div id="aboutMe" className="flex items-center">
            <img className="h-52 mx-auto rounded-full p-5" src={selfie} alt="selfie" />
            <div className="text-stone-200">
                <h3 className="text-lg"> Web Developer</h3>
                <h2 className="text-4xl"> Brian Alegre </h2>
                <br></br>
                <p>
                    {intro}
                </p>
            </div>
        </div>
    );
}

export default AboutMe;