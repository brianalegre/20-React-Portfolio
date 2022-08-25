import React from 'react';

const intro = `I love the fact that I can break things with Web Development, figuring out how it works, and
also how to improve it, all while learning.
I also love how Web Development is a great creative outlet for me. If its something I can
imagine, I can bring it to life, and that iteslf is beautiful`

const selfie = '.././assets/logo/selfie.jpg'

function AboutMe() {

    return (
        <div id="aboutMe" className="flex-none m-auto lg:items-center lg:flex lg:w-3/4 lg:max-h-screen">
            <img className="max-h-96 p-5 m-auto" src={selfie} alt="selfie" />
            <div className="text-black">
                <h2 className="text-center lg:text-start lg:p-5 text-4xl"> Hi, I'm Brian Alegre </h2>
                <br></br>
                <p className='p-5'>
                    {intro}
                </p>
            </div>
        </div>
    );
}

export default AboutMe;