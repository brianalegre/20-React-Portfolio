import React from 'react';
import { motion } from "framer-motion";

import selfie from '../images/aboutMe/selfie.jpg';
// const selfie = '.././assets/logo/selfie.jpg'

const intro = `I love the fact that I can break things with Web Development, figuring out how it works, and
also how to improve it, all while learning.
I also love how Web Development is a great creative outlet for me. If its something I can
imagine, I can bring it to life, and that iteslf is beautiful`


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

function AboutMe() {

    return (
        <motion.div id="aboutMe" className="flex-none m-auto h-screen lg:items-center lg:flex lg:w-3/4 lg:h-screen pt-10"
            initial={projectsVariant.hidden}
            whileInView={projectsVariant.show}
            viewport={{ once: true }}
        >
            <img className="max-h-96 m-auto rounded-3xl" src={selfie} alt="selfie" />
            <div className="text-black">
                <h2 className="text-center pt-5 lg:text-start lg:p-5 text-4xl"> Hi, I'm Brian Alegre </h2>
                <br></br>
                <p className='p-5'>
                    {intro}
                </p>
            </div>
        </motion.div>
    );
}

export default AboutMe;