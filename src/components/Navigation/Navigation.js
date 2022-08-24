// IMPORT
import React from 'react';

// GET PROPS FROM PARENT COMPONENT
function Navbar({ currentPage, handlePageChange }) {

    // NAVBAR ITEMS
    const navbar = [
        {
            navName: "About Me",
            navLink: "#aboutMe"
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
    ].map(navItems => ({ ...navItems, isActive: navItems.navName === currentPage }));

    return (

        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-300 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <a className="" href="##">
                        Brian Alegre
                    </a>
                </div>
                <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                    <ul className="flex flex-col lg:flex-row list-none ml-auto ">
                        {/* MAP OUT NAVBAR */}
                        {navbar.map(navItem => (
                            <li
                                key={navItem.navName}
                                className={`${navItem.isActive ? "text-orange-500" : "text-gray-700"}` + " flex items-center mr-4"}

                                // ONCLICK HANDLE PAGE CHANGE
                                onClick={() => handlePageChange(navItem.navName)}
                            >
                                {navItem.navName}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav >

    );
}

export default Navbar;