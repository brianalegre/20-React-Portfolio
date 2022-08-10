import React from 'react';



function Contact() {
    return (
        <div>
            <h1 className="text-3xl font-extrabold text-orange-500 text-center">Contact Me</h1>
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam nec auctor lectus. Nulla mattis tempus tellus, vel
                            pulvinar risus efficitur at. Sed condimentum nunc vel nisl
                            luctus, sit amet blandit.
                        </p>
                        <hr className="mt-3 border-gray-300" />
                        <div className="divide-y divide-gray-200">
                            <form className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8">
                                Name <span className="text-red-600">*</span>
                                <input
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="text"
                                    placeholder="Name"
                                />
                                Email <span className="text-red-500">*</span>
                                <input
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="email"
                                    placeholder="Email"
                                />

                                Message <span className="text-red-500">*</span>
                                <textarea
                                    required
                                    className="resize-y py-3 px-4 border focus:outline-none rounded-md w-full bg-gray-200"
                                    placeholder="Your message..."
                                ></textarea>

                                <div className="flex items-end justify-end">

                                    Send
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Contact;

