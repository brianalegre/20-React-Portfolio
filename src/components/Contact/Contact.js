import React, { useState } from 'react';
import { motion } from "framer-motion";
import { validateEmail } from '../../utils/helpers';


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
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });


    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };



    return (
        <motion.div id="contact" className='h-screen m-auto'
            variants={stackVariants}
            initial="hidden2"
            whileInView="show2"
            viewport={{ once: true }}
        >
            <h1 className="text-2xl text-center pt-10 pb-5">Contact Me</h1>
            <div className="relative py-3 max-w-xl mx-auto p-6">
                <div className="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-6">
                    <div className="max-w-md mx-auto sm:w-auto sm:m-auto">
                        <p>
                            Interested in working together?  Fill out the form below with some info about yourself and I will get back to you as soon as I can.
                        </p>
                        <hr className="mt-3 border-gray-300" />
                        <div className="divide-y divide-gray-200">
                            <form
                                className="pt-8 text-base leading-6 space-y-4 text-gray-700"
                                onSubmit={handleSubmit}
                            >
                                <p>
                                    Name <span className="text-red-600">*</span>
                                </p>
                                <input
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="text"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    onBlur={handleChange}
                                />
                                <p>
                                    Email <span className="text-red-500">*</span>
                                </p>
                                <input
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    name="email"
                                    onBlur={handleChange}
                                />
                                <p>
                                    Message <span className="text-red-500">*</span>
                                </p>
                                <textarea
                                    required
                                    className="resize-y py-3 px-4 border focus:outline-none rounded-md w-full bg-gray-200"
                                    placeholder="Enter Your Message..."
                                    name="message"
                                    onBlur={handleChange}

                                ></textarea>

                                <div className="text-center">
                                    {errorMessage && (
                                        <div id="toast-warning" className="flex items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 justify-center m-auto" role="alert">
                                            <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                                <span className="sr-only">Warning icon</span>
                                            </div>
                                            <div className="ml-3 text-sm font-normal">{errorMessage}.</div>
                                        </div>
                                    )}
                                    <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5">
                                        Submit
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