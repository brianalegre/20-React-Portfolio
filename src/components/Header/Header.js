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
        navName: "Tools",
        navLink: "#tools"
    },
    {
        navName: "Apps",
        navLink: "#apps"
    },
    {
        navName: "Contact",
        navLink: "#contact"
    },
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


        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-300 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <a className="" href="##">
                        <img src='.././assets/logo/BAlogo/ba-grey3.png' alt='BrianAlegre-Logo' />
                    </a>
                    {/* <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    </button> */}
                </div>
                <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        {navbar.map((navItems) => (
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href={navItems.navLink}>
                                    {navItems.navName}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </nav >

    );
}

export default Header;