import React from 'react';

const navbar = [
    {
        navName: "About Me",
        navLink: "#aboutMe"
    },
    {
        navName: "Skills",
        navLink: "#skills"
    },
    {
        navName: "Portfolio",
        navLink: "#portfolio"
    },
    {
        navName: "Contact",
        navLink: "#contact"
    },
    {
        navName: "Resume",
        navLink: "#resume"
    }
]


function Header() {
    return (
        // <div className='flex'>
        //     <div>
        //         <a href='#'> <img src='.././assets/logo/BAlogo/ba-grey3.png' alt='BrianAlegre-Logo' /> </a>
        //     </div>
        //     <nav>
        //         <ul className='flex flex-col'>
        //             {navbar.map((navItems) => (
        //                 <li>
        //                     <a href={navItems.navLink}> {navItems.navName} </a>
        //                 </li>
        //             ))}
        //         </ul>
        //     </nav >
        // </div>


        // <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-300 mb-3">
        //     <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        //         <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        //             <a className="" href="##">
        //                 <img src='.././assets/logo/BAlogo/ba-grey3.png' alt='BrianAlegre-Logo' />
        //             </a>
        //             {/* <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        //                 <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        //                 <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        //                 <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        //             </button> */}
        //         </div>
        //         <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
        //             <ul className="flex flex-col lg:flex-row list-none ml-auto">
        //                 {navbar.map((navItems, i) => (
        //                     <li key={navItems.navLink} className="nav-item">
        //                         <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href={navItems.navLink}>
        //                             {navItems.navName}
        //                         </a>
        //                     </li>
        //                 ))}

        //             </ul>
        //         </div>
        //     </div>
        // </nav >

        <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com/" class="flex items-center">
                    {/* <img src="" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> */}
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <div class="flex md:order-2">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;