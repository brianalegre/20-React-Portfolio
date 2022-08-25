import React from 'react';
import { motion } from "framer-motion";

const stackVariants = {

    hidden2: {
        opacity: 0,
        x: 100,
    },

    show2: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tweening",
            duration: 1,
            delay: 0.2,
        },
    },
};


function Contact() {
    return (
        <motion.div id="contact" className='h-screen m-auto'
            variants={stackVariants}
            initial="hidden2"
            whileInView="show2"
            viewport={{ once: true }}
        >
            <h1 className="text-3xl font-extrabold text-orange-500 text-center pt-10 pb-5">Contact Me</h1>
            <div className="relative py-3 max-w-xl mx-auto p-6">
                <div className="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-6">
                    <div className="max-w-md mx-auto sm:w-auto sm:m-auto">
                        <p>
                            Interested in working together?  Fill out the form below with some info about yourself and I will get back to you as soon as I can.
                        </p>
                        <hr className="mt-3 border-gray-300" />
                        <div className="divide-y divide-gray-200">
                            <form className="pt-8 text-base leading-6 space-y-4 text-gray-700">
                                <p>
                                    Name <span className="text-red-600">*</span>
                                </p>
                                <input
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="text"
                                    placeholder="Enter Your Name"
                                />
                                <p>
                                    Email <span className="text-red-500">*</span>
                                </p>
                                <input
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                />
                                <p>
                                    Message <span className="text-red-500">*</span>
                                </p>
                                <textarea
                                    required
                                    className="resize-y py-3 px-4 border focus:outline-none rounded-md w-full bg-gray-200"
                                    placeholder="Enter Your Message..."
                                ></textarea>

                                <div className="flex items-end justify-center">
                                    <button className='bg-stone-900 text-stone-200 py-2 px-4 rounded font-bold'>
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default Contact;

/*
export default function App() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="requiredField" ref={register({ required: true })} />
          <br />
          {errors.requiredField && <span>This field is required</span>}
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }

*/